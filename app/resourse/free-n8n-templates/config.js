// Configuration for the Free n8n Templates Landing Page
export const CONFIG = {
  brand: {
    name: "SparkProfit",
    creator: "Athik Hasan",
    logoSymbol: "⚡",
    newsletterName: "SparkProfit  Newsletter",
  },
  // Replace this with your actual Beehiiv magic link subscribe URL
  // Example: 'https://sparkprofit.beehiiv.com/subscribe' or your custom domain subscribe link
  beehiivSubscribeUrl: "https://magic.beehiiv.com/v1/3d9b3c52-4661-4295-b7d8-fbc780f47989",
  
  socialProof: {
    subscribers: "12,450+",
    rating: "4.9/5",
    memberReview: "Join 12,000+ creators & developers automating their business with SparkProfit.",
  },
  
  templates: [
    {
      id: "ai-content",
      name: "AI Content Automation",
      description: "Auto-generate, format, and schedule blog posts and newsletters using LLMs and n8n.",
      nodesCount: 6,
      difficulty: "Beginner",
    },
    {
      id: "social-workflows",
      name: "AI Social Media Workflows",
      description: "Turn a single idea into Twitter/X threads, LinkedIn posts, and auto-queue them.",
      nodesCount: 8,
      difficulty: "Intermediate",
    },
    {
      id: "research-systems",
      name: "AI Research Systems",
      description: "Extract text from websites, search Google, summarize long articles, and save to Notion.",
      nodesCount: 5,
      difficulty: "Intermediate",
    },
    {
      id: "creator-productivity",
      name: "Creator Productivity Workflows",
      description: "Automatically transcribe audio files, generate action items, and sync tasks.",
      nodesCount: 4,
      difficulty: "Beginner",
    },
    {
      id: "n8n-plug-play",
      name: "Plug-and-Play AI Growth",
      description: "Automate lead scraping, custom outreach sequences, and sync with your CRM.",
      nodesCount: 9,
      difficulty: "Advanced",
    },
    {
      id: "ai-growth-systems",
      name: "AI SEO Systems",
      description: "Monitor website ranking changes, perform automated keyword research, and suggest optimization guides.",
      nodesCount: 7,
      difficulty: "Intermediate",
    },
  ],
};
