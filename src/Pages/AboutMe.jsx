import { useDarkMode } from '../Context/contexts';
import image from "../assets/Imgs/SabrinaAvatar.jpg";
import { FaCode, FaDatabase, FaServer, FaDocker } from "react-icons/fa";

export default function About({ lang }) {
  const { isDark } = useDarkMode();

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
        isDark ? 'bg-[#ff0000]/5' : 'bg-[#ff0000]/10'
      }`}></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-16 border-b-4 border-[#ff0000] pb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {lang.about.title}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="relative flex-shrink-0 group">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#ff0000] to-purple-500 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 ${
              isDark ? '' : 'opacity-30 group-hover:opacity-60'
            }`}></div>
            <div className={`relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full border-4 shadow-2xl overflow-hidden ${
              isDark ? 'border-[#ff0000]/50' : 'border-[#ff0000]/30'
            }`}>
              <img
                src={image}
                alt="Sabrina Avatar"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -right-2 -bottom-2 bg-[#ff0000] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NestJS
            </div>
            <div className="absolute -left-2 -top-2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              React
            </div>
          </div>

          <div className="flex-1">
            <div className={`p-6 md:p-8 rounded-2xl border shadow-xl backdrop-blur-sm ${
              isDark
                ? 'bg-white/5 border-white/10'
                : 'bg-white/80 border-gray-200/50'
            }`}>
              <div className={`font-[Montserrat] text-sm md:text-base font-light leading-relaxed text-center lg:text-left space-y-4 ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {lang.about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { icon: FaCode, label: 'Frontend', value: 'React/Next', color: 'text-[#ff0000]' },
                  { icon: FaServer, label: 'Backend', value: 'Nest/Node', color: 'text-purple-400' },
                  { icon: FaDatabase, label: 'Database', value: 'Postgres/Prisma', color: 'text-blue-400' },
                  { icon: FaDocker, label: 'DevOps', value: 'Docker/CI', color: 'text-sky-400' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className={`p-3 rounded-xl border ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-gray-100/50 border-gray-200/30'
                    }`}>
                      <Icon className={`${item.color} text-xl mx-auto mb-1`} />
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.label}
                      </div>
                      <div className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {item.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}