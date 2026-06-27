import { Suspense } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import LoadingSpinner from "@/app/components/ui/LoadingSpinner";

export const metadata = {
  title: "Free n8n AI Automation Workflows & Templates | SparkProfit",
  description: "Get production-ready, plug-and-play n8n AI automation templates. Automate research, social media, content, and growth workflows. Join AthikHasan's SparkProfit AI Newsletter.",
  keywords: ["n8n", "AI automation", "workflows", "templates", "n8n templates", "creators", "SparkProfit", "AthikHasan"],
  openGraph: {
    title: "Free n8n AI Automation Workflows & Templates | SparkProfit",
    description: "Get production-ready, plug-and-play n8n AI automation templates. Automate research, social media, content, and growth workflows.",
    type: "website",
  }
};

export default function FreeN8nTemplatesPage() {
  return (
    <div className="w-full text-white min-h-screen relative">
      {/* Dynamic Header/Top Space (if needed) to align layout */}
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Features />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Benefits />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <CTA />
        </Suspense>
      </div>
    </div>
  );
}
