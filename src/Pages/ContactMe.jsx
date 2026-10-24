import { useDarkMode } from '../Context/contexts';
import { FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

export default function Contact({ lang }) {
  const { isDark } = useDarkMode();

  const contacts = [
    { icon: SiFiverr, label: "Fiverr", url: "https://www.fiverr.com/s/qDrvwjZ", color: "hover:text-[#1dbf73]" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/saab-imm-4697a8320", color: "hover:text-[#0a66c2]" },
    { icon: FaGithubAlt, label: "GitHub", url: "https://github.com/SaabImm", color: "hover:text-white" },
  ];

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl ${
        isDark ? 'bg-[#ff0000]/5' : 'bg-[#ff0000]/10'
      }`}></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-12 border-b-4 border-[#ff0000] pb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {lang.contact.title}
        </h1>

        <p className={`font-[Montserrat] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {lang.contact.text}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-[#ff0000]/10 ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#ff0000]/30'
                    : 'bg-gray-100/50 border-gray-200/30 hover:bg-gray-200/50 hover:border-[#ff0000]/30'
                }`}
              >
                <Icon className={`text-4xl mx-auto mb-3 transition-colors duration-300 ${
                  isDark ? 'text-gray-400 group-hover:text-[#ff0000]' : 'text-gray-500 group-hover:text-[#cc0000]'
                } ${contact.color}`} />
                <div className={`font-[Montserrat] text-sm transition-colors ${
                  isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {contact.label}
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12">
          <a
            href="mailto:saabimm@gmail.com"
            className={`inline-flex items-center gap-2 transition-colors font-[Montserrat] text-sm ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <FaEnvelope /> saabimm@gmail.com
          </a>
        </div>

        <div className={`mt-16 text-xs border-t pt-8 ${
          isDark ? 'text-gray-600 border-white/5' : 'text-gray-400 border-gray-200/30'
        }`}>
          © {new Date().getFullYear()} Bessa Sabrina · {lang.contact.footer}
        </div>
      </div>
    </div>
  );
}