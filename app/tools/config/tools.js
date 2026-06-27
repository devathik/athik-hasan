export const TOOLS = [
  {
    slug: "whatsapp-link-generator",
    name: "WhatsApp Link Generator",
    tagline: "Generate custom WhatsApp chat links with pre-filled messages instantly.",
    description: "Create direct click-to-chat links for WhatsApp with custom pre-filled messages. Perfect for business leads, support chat shortcuts, and social media bios.",
    link: "https://whatsapp-link-generator-1078402109224.asia-southeast1.run.app/",
    icon: "💬",
    category: "marketing",
    badge: "Popular",
    features: [
      "Custom pre-filled messages support",
      "Instant click-to-chat short links",
      "Clean, responsive material interface",
      "No registration or personal data required"
    ],
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300",
    buttonColor: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25",
    howItWorks: [
      { step: "1", title: "Enter Phone Number", desc: "Type your WhatsApp number including the country code (without spaces or special characters)." },
      { step: "2", title: "Draft Pre-filled Message", desc: "Write a template message that users will send to you automatically when they click the link." },
      { step: "3", title: "Generate & Copy", desc: "Click the generate button to instantly get your direct chat link and copy it to your clipboard." }
    ],
    useCases: [
      "Social media profile links (Instagram, TikTok, Twitter bios)",
      "Website contact pages and live support call-to-actions",
      "Ad campaigns (Facebook, Instagram, Google Ads) to start chats",
      "QR Codes on print materials for instant client contact"
    ]
  }
];

export function getToolBySlug(slug) {
  return TOOLS.find((tool) => tool.slug === slug);
}
