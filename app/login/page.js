"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function decodeJwt(credential) {
  try {
    const payload = credential.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodeURIComponent(escape(decoded)));
  } catch (error) {
    return null;
  }
}

export default function LoginPage() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get("from") || "/dashboard";

  useEffect(() => {
    const stored = localStorage.getItem("google_user_profile");
    if (stored) {
      setUser(JSON.parse(stored));
      router.push(redirectTarget);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
          callback: (response) => {
            const profile = decodeJwt(response.credential);
            if (profile) {
              const userData = {
                name: profile.name,
                email: profile.email,
                picture: profile.picture,
              };
              localStorage.setItem(
                "google_user_profile",
                JSON.stringify(userData),
              );
              setUser(userData);
              setMessage("Signed in successfully. Redirecting...");
              window.dispatchEvent(new Event("local-user-change"));
              setTimeout(() => {
                router.push(redirectTarget);
              }, 1000);
            } else {
              setMessage("Google sign-in failed. Please try again.");
            }
          },
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin-button"),
          {
            theme: "filled_blue",
            size: "large",
            width: "100%",
          },
        );
      }
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("google_user_profile");
    setUser(null);
    setMessage("Signed out successfully.");
    window.dispatchEvent(new Event("local-user-change"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
              🔑 Secure Login
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Sign in with Google
            </h1>
            <p className="mx-auto max-w-2xl text-gray-300 text-sm sm:text-base leading-relaxed">
              Access your dashboard, save your model API key, and use the Viral
              Thread Generator with your own credentials.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Google Account</h2>
                <p className="text-sm text-gray-400">
                  Use your Google account to sign in quickly and keep your
                  dashboard connected in this browser.
                </p>
              </div>

              {user ? (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-20 w-20 rounded-3xl object-cover"
                    />
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.24em] text-purple-300">
                        Signed in as
                      </p>
                      <p className="text-xl font-semibold text-white">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-300">{user.email}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="mt-6 inline-flex items-center justify-center rounded-3xl border border-white/10 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-500/20"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-center">
                  <div id="google-signin-button" className="mx-auto max-w-xs" />
                  <p className="mt-4 text-sm text-gray-400">
                    If the Google sign-in button does not appear, make sure the
                    browser allows third-party scripts and that your Google
                    client ID is configured.
                  </p>
                </div>
              )}

              {message && (
                <div className="rounded-3xl border border-white/10 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                  {message}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Need help?</h2>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 text-sm text-gray-300">
                <p>
                  After signing in, visit the dashboard to save your model API
                  key locally. That key will be used by the Viral Thread
                  Generator.
                </p>
                <p>
                  This app stores your login profile and API key in browser
                  storage only. No server-side account management is included.
                </p>
                <p>
                  Set{" "}
                  <code className="rounded bg-slate-900 px-1.5 py-0.5 text-xs text-slate-100">
                    NEXT_PUBLIC_GOOGLE_CLIENT_ID
                  </code>{" "}
                  in your environment for Google login.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
