import { FiMessageCircle, FiFeather } from "react-icons/fi";

export const dropdownTools = [
  {
    name: "Viral Thread Generator",
    desc: "Generate professional viral social media threads.",
    icon: FiFeather,
    link: "/tools/viral-thread-generator",
    colorClass: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    hoverTitleClass: "group-hover/item:text-violet-300",
  },
  {
    name: "WhatsApp Link Generator",
    desc: "Generate custom WhatsApp chat links instantly.",
    icon: FiMessageCircle,
    link: "https://whatsapp-link-generator-1078402109224.asia-southeast1.run.app/",
    isExternal: true,
    colorClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    hoverTitleClass: "group-hover/item:text-emerald-300",
  },
];
