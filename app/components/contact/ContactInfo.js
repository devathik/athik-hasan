import { contactInfo } from '@/app/constants/contact';

const ContactInfo = () => (
  <div className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8">
    <h2 className="text-lg md:text-xl font-semibold text-white mb-4 md:mb-6">Contact Information</h2>
    <div className="space-y-4">
      {contactInfo.map((info) => (
        <div key={info.label} className="flex items-center gap-3 md:gap-4">
          <div className="p-2 rounded-lg md:rounded-xl bg-white/5 shrink-0">
            <div className="text-violet-500 ">
              <info.icon/>
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-white/40 text-xs md:text-sm">{info.label}</p>
            <p className="text-white text-sm md:text-base mt-0.5 md:mt-1 truncate">
              {info.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ContactInfo;
