export const CAMPAIGNS = [
  {
    slug: "free-n8n-templates",
    title: "n8n Templates",
    heroTitle: "Get Free n8n AI Automation Templates",
    description: "Plz enter your email and 'Template' keyword in fields to get free n8n AI Automation Templates. You will be sent email very soon. But you can instantly access the templates after subscribing.",
    badge: "FREE TEMPLATES PACK",
    defaultTag: "n8n-templates",
    resourceName: "awesome-n8n-templates",
    resourceLink: "https://github.com/mdathikhasan/awesome-n8n-templates",
    link: "/resourse/free-n8n-templates",
    hasCustomPage: true, // Use custom n8n static page folder
    icon: "⚡",
    color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300",
    buttonColor: "bg-purple-600 hover:bg-purple-700 shadow-purple-500/25",
  },

  {
    slug: "prompts-pdf",
    title: "Prompt PDF",
    heroTitle: "Get Free AI Image Prompts PDF",
    description: "Enter your email and write 'Prompt PDF' to instantly access our curated collection of  image prompts.",
    badge: "FREE PDF PACK",
    defaultTag: "Prompt PDF",
    resourceName: "ai-image-prompts.pdf",
    resourceLink: "https://drive.google.com/file/d/1t6oJqdjBN3ntlYY8WnB1qh3W0CDR1lVb/view?usp=sharing",
    link: "/resourse/prompts-pdf",
    hasCustomPage: false,
    icon: "🎨",
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-rose-300",
    buttonColor: "bg-rose-600 hover:bg-rose-700 shadow-rose-500/25",
    buttonText: "Download PDF ↗",
  },
  {
    slug: "alex-hormozi-100m-offers",
    title: "Alex Hormozi $100M Offers Ebook",
    heroTitle: "Get Alex Hormozi's $100M Offers Ebook Free",
    description: "Enter your email and write 'Alex Hormozi Ebook' to  download your free copy of the legendary $100M Offers Ebook.",
    badge: "FREE EBOOK DOWNLOAD",
    defaultTag: "Alex Hormozi $100M Offers",
    resourceName: "Alex_Hormozi_100M_Offers.pdf",
    resourceLink: "https://drive.google.com/file/d/18W_NM-IdtdRUZqz9HDX7AUnHJIXPAIXW/view?usp=sharing",
    link: "/resourse/alex-hormozi-100m-offers",
    hasCustomPage: false,
    icon: "📚",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300",
    buttonColor: "bg-amber-600 hover:bg-amber-700 shadow-amber-500/25",
    buttonText: "Download Ebook ↗",
  }
];

export function getCampaignBySlug(slug) {
  return CAMPAIGNS.find((campaign) => campaign.slug === slug);
}
