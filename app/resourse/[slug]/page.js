import Link from "next/link";
import { notFound } from "next/navigation";
import { FaFacebook, FaLinkedinIn, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { getCampaignBySlug } from "../config/campaigns";
import BeehiivEmbedForm from "../free-n8n-templates/components/BeehiivEmbedForm";
import GoogleSheetsForm from "../free-n8n-templates/components/GoogleSheetsForm";
import { socialLinks as personalSocialLinks } from "../../constants/contact";

// Dynamic metadata generation
export async function generateMetadata({ params }) {
  const campaign = getCampaignBySlug(params.slug);
  if (!campaign) return {};
  
  return {
    title: `${campaign.heroTitle} | SparkProfit`,
    description: campaign.description,
  };
}

export default function DynamicCampaignPage({ params }) {
  const campaign = getCampaignBySlug(params.slug);
  
  // If no campaign exists with this slug, throw 404
  if (!campaign) {
    notFound();
  }

  const BRAND_COLORS = {
    linkedin: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/5 hover:bg-blue-500/10",
      text: "text-blue-300 group-hover:text-blue-400",
      icon: "text-[#0A66C2]"
    },
    github: {
      border: "border-gray-500/20",
      bg: "bg-gray-500/5 hover:bg-gray-500/10",
      text: "text-gray-300 group-hover:text-gray-300",
      icon: "text-gray-400"
    },
    twitter: {
      border: "border-sky-500/20",
      bg: "bg-sky-500/5 hover:bg-sky-500/10",
      text: "text-sky-300 group-hover:text-sky-400",
      icon: "text-[#1DA1F2]"
    },
    facebook: {
      border: "border-indigo-500/20",
      bg: "bg-indigo-500/5 hover:bg-indigo-500/10",
      text: "text-indigo-300 group-hover:text-indigo-400",
      icon: "text-[#1877F2]"
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-semibold tracking-wider text-purple-300 uppercase">
            ✨ {campaign.badge || "Free Access"}
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
            {campaign.heroTitle}
          </h1>

          {/* Subheadline */}
          <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-md mx-auto">
            {campaign.description}
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute -inset-px bg-gradient-to-r from-purple-500/10 via-transparent to-emerald-500/10 rounded-2xl pointer-events-none" />
          
          <GoogleSheetsForm 
            formId={campaign.slug} 
            formTitle={campaign.title} 
            defaultTag={campaign.defaultTag}
            resourceName={campaign.resourceName}
            resourceLink={campaign.resourceLink}
          />
        </div>

        {/* Newsletter & Community CTA Section */}
        <div className="grid grid-cols-1 gap-6 text-left w-full">
          {/* Card 1: Newsletter CTA */}
          <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl space-y-4">
            <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
              <span>📬</span> Join SparkProfit  Newsletter
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get plug-and-play AI templates, growth hacks, and automation tips directly to your inbox every week.
            </p>
            <div className="pt-1">
              <BeehiivEmbedForm formId="c1dde7e8-e62b-4d86-acd6-526f26d89d79" />
            </div>
          </div>

          {/* Card 2 & 3: Personal & Group CTAs in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Card 2: Personal Profiles CTA */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>👤</span> Connect Personally
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                  Connect with me personally, follow my dev updates, or check out my repos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {personalSocialLinks.map((link) => {
                  const brand = BRAND_COLORS[link.name.toLowerCase()] || BRAND_COLORS.github;
                  const IconComponent = link.icon;
                  return (
                    <a 
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${brand.border} ${brand.bg} transition duration-200 group active:scale-98`}
                    >
                      <IconComponent className={`w-4 h-4 ${brand.icon} group-hover:scale-110 transition-transform`} />
                      <span className={`text-xs font-bold text-white ${brand.text} transition-colors`}>{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Card 3: Groups & Communities CTA */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>👥</span> Join Communities
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                  Join our dedicated forums and groups to share workflows, prompts, and ideas.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a 
                  href="https://wa.me/8801824990037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-300 transition duration-200 group active:scale-98"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">Chat Group</span>
                    <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">WhatsApp</span>
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/share/1hcdXgw39R/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-blue-300 transition duration-200 group active:scale-98"
                >
                  <FaFacebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">Social Group</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">Facebook</span>
                  </div>
                </a>
                <a 
                  href="https://t.me/sparkprofit_community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 text-sky-300 transition duration-200 group active:scale-98"
                >
                  <FaTelegram className="w-5 h-5 text-[#0088cc] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">Broadcast</span>
                    <span className="text-xs font-bold text-white group-hover:text-sky-400 transition-colors">Telegram</span>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/groups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-indigo-500/20 bg-indigo-500/5 hover:bg-indigo-500/10 text-indigo-300 transition duration-200 group active:scale-98"
                >
                  <FaLinkedinIn className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">Community</span>
                    <span className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">LinkedIn Group</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-center items-center gap-4 text-xs font-semibold text-gray-500 pt-4">
          <Link href="/resourse" className="text-white transition">
            All Resources
          </Link>
          <span>•</span>
          <Link href="/" className="text-white transition">
             Home
          </Link>
        </div>
      </div>
    </div>
  );
}
