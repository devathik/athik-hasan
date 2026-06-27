"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function BeehiivEmbedForm({ formId }) {
  const [iframeHeight, setIframeHeight] = useState("200px");
  const [iframeSrc, setIframeSrc] = useState(`https://subscribe-forms.beehiiv.com/v3/forms/${formId}`);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // 1. Detect if redirected back with subscription success parameter
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("subscribed") === "true" || params.get("success") === "true") {
        setIsSubscribed(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  useEffect(() => {
    // 2. Listen for height messages from the Beehiiv iframe
    const handleMessage = (event) => {
      // Ensure the message is from beehiiv
      if (!event.origin.includes("beehiiv.com")) return;
      
      let msg = event.data;
      if (typeof msg === "string") {
        try {
          msg = JSON.parse(msg);
        } catch (e) {
          // Not a JSON string, ignore
        }
      }
      
      if (msg && msg.type === "beehiiv:styles" && msg.payload && msg.payload.height) {
        // Add a tiny buffer to avoid vertical scrollbars
        const heightVal = parseInt(msg.payload.height, 10);
        setIframeHeight(`${heightVal + 4}px`);
      }
    };

    window.addEventListener("message", handleMessage);

    // 3. Forward UTM parameters and referrer to the iframe src
    if (typeof window !== "undefined") {
      const url = new URL(`https://subscribe-forms.beehiiv.com/v3/forms/${formId}`);
      const parentParams = new URLSearchParams(window.location.search);
      
      const utmParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
      utmParams.forEach((param) => {
        if (parentParams.has(param)) {
          url.searchParams.set(param, parentParams.get(param));
        }
      });
      
      url.searchParams.set("referrer", encodeURIComponent(window.location.href));
      setIframeSrc(url.toString());
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [formId]);

  return (
    <>
      {/* Load the Beehiiv attribution script for tracking */}
      <Script
        src="https://subscribe-forms.beehiiv.com/attribution.js"
        strategy="lazyOnload"
      />

      <div className="w-full flex flex-col justify-center items-center overflow-hidden">
        <iframe
          src={iframeSrc}
          data-beehiiv-form={formId}
          style={{
            width: "100%",
            height: iframeHeight,
            border: "none",
            background: "transparent",
            display: "block",
            transition: "height 0.3s ease",
          }}
          title="SparkProfit Newsletter Signup"
          scrolling="no"
        />

        {/* Custom Thank You / Resource Access Box */}
        {isSubscribed && (
          <div 
            className={`w-full mt-4 p-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md flex flex-col gap-3 text-left transition-all duration-500 ease-out transform ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 mt-0.5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-emerald-400">Subscription Confirmed!</h3>
                <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                  Thank you for your interest! The resource will be sent to your email very soon. But you can instantly access the resource from below link.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-emerald-500/10 my-1" />
            
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold text-emerald-400/80 uppercase tracking-wider">
                Resource link
              </p>
              <a 
                href="https://github.com/mdathikhasan/awesome-n8n-templates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all duration-200 group active:scale-[0.98]"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-xs text-emerald-400/70 font-normal">Resource Link</span>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">awesome-n8n-templates</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-sm">
                  <span>Get templates</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
