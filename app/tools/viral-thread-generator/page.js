"use client";

import { GoogleGenAI } from "@google/genai";
import { useEffect, useMemo, useState } from "react";
import HeaderSection from "./components/HeaderSection";
import ThreadBuilder from "./components/ThreadBuilder";
import ThreadPreview from "./components/ThreadPreview";

const GEMINI_DEFAULT_MODEL = "gemini-2.5-flash";
const OPENAI_DEFAULT_MODEL = "gpt-4o-mini";

const quickExamples = [
  "ক্রিপ্টো ট্রেডিং সম্পর্কে একটি ভাইরাল থ্রেড তৈরি করুন।",
  "একজন সোলোপ্রেনিউরকে সাহায্য করার জন্য ৫-৭ পোস্টে টুইটার থ্রেড লিখুন।",
  "AI ব্যবহার করে কন্টেন্ট ক্রিয়েশন বৃদ্ধি সম্পর্কে বাংলা থ্রেড লিখুন।",
];

const tones = [
  "Informational",
  "Friendly",
  "Motivational",
  "Casual",
  "Professional",
];
const languages = ["Bangla", "English"];
const postCounts = ["3 Posts", "4 Posts", "5 Posts", "6 Posts", "7 Posts", "8 Posts", "9 Posts", "10 Posts"];

const detectProvider = (key) => {
  const normalizedKey = key.trim();
  if (!normalizedKey) return "Gemini";
  if (/^sk-or-v1-/.test(normalizedKey) || /openrouter/i.test(normalizedKey)) {
    return "OpenRouter";
  }
  if (/^sk-ant-/.test(normalizedKey) || /claude/i.test(normalizedKey) || /anthropic/i.test(normalizedKey)) {
    return "Claude";
  }
  if (/^(AIza|AQ\.)/i.test(normalizedKey) || /gemini/i.test(normalizedKey)) {
    return "Gemini";
  }
  if (/^sk-[A-Za-z0-9]/.test(normalizedKey) || /openai/i.test(normalizedKey)) {
    return "OpenAI";
  }
  return "Gemini";
};

const getNumericPostCount = (countStr) => {
  const parsed = parseInt(countStr, 10);
  return isNaN(parsed) || parsed <= 0 ? 5 : parsed;
};

export default function ViralThreadGeneratorPage() {
  const [prompt, setPrompt] = useState(quickExamples[0]);
  const [tone, setTone] = useState("Informational");
  const [language, setLanguage] = useState("Bangla");
  const [postCount, setPostCount] = useState("5 Posts");
  const [apiKey, setApiKey] = useState("");
  const [storedApiKey, setStoredApiKey] = useState("");
  const [activeProvider, setActiveProvider] = useState("Gemini");
  const [configuredModel, setConfiguredModel] = useState("");
  const [thread, setThread] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const provider = localStorage.getItem("active_api_provider") || "Gemini";
    setActiveProvider(provider);
    
    let key = localStorage.getItem(`api_key_${provider.toLowerCase()}`) || "";
    if (!key && provider === "Gemini") {
      key = localStorage.getItem("viral_thread_api_key") || "";
    }
    setStoredApiKey(key);

    let modelId = localStorage.getItem(`api_model_${provider.toLowerCase()}`) || "";
    const customModelId = localStorage.getItem(`api_model_custom_${provider.toLowerCase()}`) || "";
    if (modelId === "Custom..." && customModelId) {
      modelId = customModelId;
    }
    if (!modelId) {
      if (provider === "Gemini") modelId = "gemini-2.5-flash";
      else if (provider === "OpenAI") modelId = "gpt-4o-mini";
      else if (provider === "Claude") modelId = "claude-3-5-haiku-20241022";
      else if (provider === "OpenRouter") modelId = "google/gemini-2.5-flash:free";
    }
    setConfiguredModel(modelId);
  }, []);

  const summary = useMemo(
    () =>
      storedApiKey
        ? `API configured via Dashboard (${activeProvider}: ${configuredModel}).`
        : `No saved API key found for ${activeProvider}. Visit the dashboard settings to store your key.`,
    [storedApiKey, activeProvider, configuredModel],
  );

  useEffect(() => {
    if (!thread) {
      setPosts([]);
      return;
    }

    // 1. Try parsing as JSON array
    try {
      const cleanJson = thread.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleanJson);
      if (Array.isArray(parsed)) {
        setPosts(parsed.map((p) => String(p).trim()));
        return;
      }
    } catch (e) {
      // Not a JSON array
    }

    // 2. Try custom separator [POST_SEPARATOR]
    let parts = thread
      .split(/\[POST_SEPARATOR\]/gi)
      .map((p) => p.trim())
      .filter(Boolean);

    // 3. Try double newline separator
    if (parts.length <= 1) {
      parts = thread.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    }

    // 4. Try single newline separator if text has numbering (e.g. 1. or ১.)
    if (parts.length <= 1) {
      const hasNumbering = /\d+\.|\d+\/|১\.|২\.|৩\.|৪\.|৫\.|৬\.|৭\.|৮\.|৯\./.test(thread);
      if (hasNumbering) {
        parts = thread
          .split(/\n/)
          .map((p) => p.trim())
          .filter(Boolean);
      }
    }

    // Clean up typical headers and indexes from starts
    const cleaned = parts
      .map((part) =>
        part
          .replace(/^(Post\s*\d+\s*:?)/i, "")
          .replace(/^(\d+\/\d+\s*:?)/, "")
          .replace(/^(\d+\.\s*)/, "")
          .replace(/^(১|২|৩|৪|৫|৬|৭|৮|৯|১০)\.\s*/, "") // Bangla numbering
          .trim(),
      )
      .filter(Boolean);

    setPosts(cleaned);
  }, [thread]);

  const cleanThreadText = useMemo(() => {
    return posts.join("\n\n");
  }, [posts]);

  const handleEditPost = (newText, index) => {
    setPosts((prevPosts) => {
      const updated = [...prevPosts];
      updated[index] = newText;
      return updated;
    });
  };

  const handleExample = (example) => {
    setPrompt(example);
    setThread("");
    setError("");
  };

  const handleGenerate = async () => {
    setError("");
    setThread("");
    setSuccessMessage("");
    setCopiedIndex(null);

    const resolvedProvider = apiKey.trim() ? detectProvider(apiKey) : activeProvider;
    const chosenKey = apiKey.trim() || storedApiKey.trim();
    
    if (!chosenKey) {
      setError(
        `Please configure your ${resolvedProvider} API key on the dashboard settings page or paste one below.`,
      );
      return;
    }

    if (!prompt.trim()) {
      setError("Please enter a topic or context.");
      return;
    }

    let resolvedModel = configuredModel;
    if (apiKey.trim()) {
      if (resolvedProvider === "Gemini") resolvedModel = "gemini-2.5-flash";
      else if (resolvedProvider === "OpenAI") resolvedModel = "gpt-4o-mini";
      else if (resolvedProvider === "Claude") resolvedModel = "claude-3-5-haiku-20241022";
      else if (resolvedProvider === "OpenRouter") resolvedModel = "google/gemini-2.5-flash:free";
    }

    setLoading(true);
    const numericPostCount = getNumericPostCount(postCount);

    const handleResponseJson = async (response) => {
      let data = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(
          text.slice(0, 150) || `HTTP error status ${response.status}`
        );
      }
      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            data?.error?.status ||
            `API error. Status: ${response.status}`
        );
      }
      return data;
    };

    try {
      let generated = "";
      let isTruncated = false;

      if (resolvedProvider === "Gemini") {
        const ai = new GoogleGenAI({ apiKey: chosenKey });
        const response = await ai.models.generateContent({
          model: resolvedModel || "gemini-2.5-flash",
          contents: `You are a viral thread generator. Create 1 hook post and exactly ${numericPostCount} subsequent thread posts in ${language} with a ${tone} tone. Keep the posts clean and separate each post with a line containing exactly "[POST_SEPARATOR]" (without quotes). Do not write anything else on that line.\n\nTopic: ${prompt.trim()}`,
          config: {
            temperature: 0.8,
            maxOutputTokens: 2048,
          },
        });

        const candidate = response.candidates?.[0];
        generated = response.text?.trim() || "";
        
        if (candidate?.finishReason === "MAX_TOKENS") {
          isTruncated = true;
        }
      } else if (resolvedProvider === "OpenAI") {
        const endpoint = "https://api.openai.com/v1/chat/completions";
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chosenKey}`,
        };
        const body = {
          model: resolvedModel || "gpt-4o-mini",
          temperature: 0.8,
          max_tokens: 2048,
          messages: [
            {
              role: "system",
              content: `You are a viral thread generator. Create 1 hook post and exactly ${numericPostCount} subsequent thread posts in ${language} with a ${tone} tone. Keep the posts clean and separate each post with a line containing exactly "[POST_SEPARATOR]" (without quotes). Do not write anything else on that line.`,
            },
            {
              role: "user",
              content: `Topic: ${prompt.trim()}`,
            },
          ],
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });

        const data = await handleResponseJson(response);
        generated = data?.choices?.[0]?.message?.content?.trim() || "";
        const finishReason = data?.choices?.[0]?.finish_reason;
        if (finishReason === "length") isTruncated = true;
      } else if (resolvedProvider === "OpenRouter") {
        const endpoint = "https://openrouter.ai/api/v1/chat/completions";
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chosenKey}`,
        };
        const body = {
          model: resolvedModel || "google/gemini-2.5-flash:free",
          messages: [
            {
              role: "user",
              content: `You are a viral thread generator. Create 1 hook post and exactly ${numericPostCount} subsequent thread posts in ${language} with a ${tone} tone. Keep the posts clean and separate each post with a line containing exactly "[POST_SEPARATOR]" (without quotes). Do not write anything else on that line.\n\nTopic: ${prompt.trim()}`,
            },
          ],
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });

        const data = await handleResponseJson(response);
        generated = data?.choices?.[0]?.message?.content?.trim() || "";
        const finishReason = data?.choices?.[0]?.finish_reason;
        if (finishReason === "length") isTruncated = true;
      } else if (resolvedProvider === "Claude") {
        const endpoint = "https://api.anthropic.com/v1/messages";
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": chosenKey,
          "anthropic-version": "2023-06-01",
          "dangerously-allow-developer-only-headers-for-cors": "true",
        };
        const body = {
          model: resolvedModel || "claude-3-5-haiku-20241022",
          max_tokens: 2048,
          messages: [
            {
              role: "user",
              content: `You are a viral thread generator. Create 1 hook post and exactly ${numericPostCount} subsequent thread posts in ${language} with a ${tone} tone. Keep the posts clean and separate each post with a line containing exactly "[POST_SEPARATOR]" (without quotes). Do not write anything else on that line.\n\nTopic: ${prompt.trim()}`,
            },
          ],
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        });

        const data = await handleResponseJson(response);
        generated = data?.content?.[0]?.text?.trim() || "";
        const finishReason = data?.stop_reason;
        if (finishReason === "max_tokens") isTruncated = true;
      }

      if (!generated) {
        throw new Error("No response returned from the model provider.");
      }

      setThread(generated);
      if (isTruncated) {
        setSuccessMessage(
          "Thread generated, but was partially truncated due to length limits."
        );
      } else {
        setSuccessMessage(
          "Thread generated successfully. Copy or download it below."
        );
      }
    } catch (err) {
      setError(
        err?.message || "Unable to generate the thread. Try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanThreadText);
      setSuccessMessage("Thread copied to clipboard.");
    } catch (err) {
      setError("Unable to copy thread. Please try manually.");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([cleanThreadText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "viral-thread.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setThread("");
    setError("");
    setSuccessMessage("");
    setCopiedIndex(null);
  };

  const handleCopySingle = async (postText, index) => {
    try {
      await navigator.clipboard.writeText(postText);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      setError("Unable to copy post. Please try manually.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <HeaderSection />

        <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <ThreadBuilder
            prompt={prompt}
            setPrompt={setPrompt}
            tone={tone}
            setTone={setTone}
            tones={tones}
            language={language}
            setLanguage={setLanguage}
            languages={languages}
            postCount={postCount}
            setPostCount={setPostCount}
            postCounts={postCounts}
            apiKey={apiKey}
            setApiKey={setApiKey}
            provider={activeProvider}
            setProvider={setActiveProvider}
            quickExamples={quickExamples}
            handleExample={handleExample}
            summary={summary}
            loading={loading}
            handleGenerate={handleGenerate}
            error={error}
            successMessage={successMessage}
          />

          <ThreadPreview
            thread={thread}
            posts={posts}
            storedApiKey={storedApiKey}
            handleCopy={handleCopy}
            handleDownload={handleDownload}
            handleReset={handleReset}
            handleCopySingle={handleCopySingle}
            copiedIndex={copiedIndex}
            handleEditPost={handleEditPost}
          />
        </div>
      </div>
    </div>
  );
}
