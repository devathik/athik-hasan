"use client";

import { useEffect, useState } from "react";
import { GOOGLE_SHEETS_CONFIG } from "../config/sheetsConfig";

export default function GoogleSheetsForm({ 
  formId = "free-n8n-templates", 
  formTitle = "n8n Templates",
  defaultTag = "n8n-templates",
  resourceName = "awesome-n8n-templates",
  resourceLink = "https://github.com/mdathikhasan/awesome-n8n-templates"
}) {
  const [email, setEmail] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Check URL query parameters on mount in case they are reloaded/redirected
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (
        params.get("subscribed") === "true" ||
        params.get("success") === "true"
      ) {
        setIsSubscribed(true);
      }
    }
  }, []);

  // Trigger thank you box slide-up animation
  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        email: email,
        tag: tag || defaultTag || GOOGLE_SHEETS_CONFIG.defaultTag || "n8n-templates",
        date: new Date().toLocaleString(),
        formId,
        formTitle,
      };

      // Submit via POST to our secure local Next.js API route
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to subscribe. Please check backend config.");
      }

      setStatus("success");
      setIsSubscribed(true);
      setEmail("");
      setTag("");
    } catch (err) {
      console.error("Error submitting to Google Sheets:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Subscribe Form (only show if not subscribed yet) */}
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          {/* Tag Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="tag-field"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between items-center"
            >
              <span>Keyword name</span>
              <span className="text-[10px] text-gray-500 font-normal lowercase italic select-none bg-white/5 px-2 py-0.5 rounded border border-white/5">optional</span>
            </label>
            <input
              id="tag-field"
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Write keyword Name here ...(Optional)"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
              disabled={status === "loading"}
            />
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email-field"
              className="text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Email Address
            </label>
            <input
              id="email-field"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
              disabled={status === "loading"}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-emerald-600 text-white shadow-lg hover:shadow-purple-500/20 hover:opacity-95 transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Subscribing...</span>
              </>
            ) : (
              <span>Subscribe & Get Access</span>
            )}
          </button>

          {/* Error Message */}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center font-medium mt-1">
              {errorMessage}
            </p>
          )}
        </form>
      ) : null}

      {/* Custom Thank You / Resource Access Box */}
      {isSubscribed && (
        <div
          className={`w-full p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md flex flex-col gap-3 text-left transition-all duration-500 ease-out transform ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-emerald-400">
                Subscription Confirmed!
              </h3>
              <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                Thank you for your interest! The resource will be sent to your
                email very soon. But you can instantly access the resource from
                below link.
              </p>
            </div>
          </div>

          <div className="h-px bg-emerald-500/10 my-1" />

          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-emerald-400/80 uppercase tracking-wider">
              Resource link
            </p>
            <a
              href={resourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all duration-200 group active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-emerald-400/70 font-normal">
                    Resource Link
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {resourceName}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-sm">
                <span>Get Resource</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  ➔
                </span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}