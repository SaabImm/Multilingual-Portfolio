import { useDarkMode } from '../Context/contexts';
import { FaWordpress, FaPlug, FaChartBar, FaCheck, FaArrowRight } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

// Order matters: offers are listed by priority. `proof` links a case study slug.
const offerMeta = [
  { key: 'websites', icon: FaWordpress, color: 'text-blue-400', proof: 'wordpress-gov' },
  { key: 'react', icon: SiNextdotjs, color: 'text-gray-500 dark:text-white', proof: 'mbs-solutions' },
  { key: 'api', icon: FaPlug, color: 'text-green-400', proof: null },
  { key: 'apps', icon: FaChartBar, color: 'text-purple-400', proof: 'gestorg' },
];

export default function Services({ lang }) {
  const { isDark } = useDarkMode();
  const s = lang.services;

  const card = isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200/50';
  const heading = isDark ? 'text-white' : 'text-gray-900';
  const body = isDark ? 'text-gray-300' : 'text-gray-700';
  const muted = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-purple-500/5' : 'bg-purple-300/20'
      }`}></div>

      <div className="relative z-10 max-w-6xl mx-auto font-[Montserrat]">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-6 border-b-4 border-[#ff0000] pb-2 ${heading}`}>
          {s.title}
        </h1>
        <p className={`text-center text-sm md:text-base mb-16 max-w-2xl mx-auto ${muted}`}>{s.subtitle}</p>

        {/* Offers */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {offerMeta.map(({ key, color, proof, ...meta }) => {
            const Icon = meta.icon;
            const offer = s.offers[key];
            return (
              <div
                key={key}
                className={`flex flex-col p-6 md:p-8 rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ff0000]/30 hover:shadow-[#ff0000]/10 ${card}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <Icon className={`text-2xl ${color}`} />
                  </div>
                  <h2 className={`font-[Aclonica] text-lg md:text-xl ${heading}`}>{offer.title}</h2>
                </div>

                <p className={`text-sm md:text-base leading-relaxed mb-4 ${body}`}>{offer.pitch}</p>
                <p className={`text-xs mb-5 ${muted}`}>
                  <span className="font-semibold text-[#ff0000]">{s.forLabel}</span> {offer.for}
                </p>

                <ul className="space-y-2 mb-6 flex-1">
                  {offer.deliverables.map((d) => (
                    <li key={d} className={`flex items-start gap-2 text-sm ${body}`}>
                      <FaCheck className="text-[#ff0000] text-xs mt-1 shrink-0" /> {d}
                    </li>
                  ))}
                </ul>

                <div className={`flex flex-wrap items-center gap-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                  <a href="#contact" className="text-sm font-semibold text-[#ff0000] hover:underline">
                    {s.quote}
                  </a>
                  {proof && (
                    <a href={`#case-${proof}`} className={`inline-flex items-center gap-1 text-sm ${muted} hover:text-[#ff0000]`}>
                      {s.proof} <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Packages & pricing */}
        <h2 className={`font-[Aclonica] text-xl md:text-2xl text-center mt-20 mb-3 ${heading}`}>{s.pricing.title}</h2>
        <p className={`text-center text-sm mb-10 max-w-2xl mx-auto ${muted}`}>{s.pricing.subtitle}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.pricing.tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`flex flex-col p-6 rounded-2xl border ${card} ${idx === 2 ? 'border-[#ff0000]/40 shadow-lg shadow-[#ff0000]/10' : ''}`}
            >
              <h3 className={`font-[Aclonica] text-base leading-snug mb-3 lg:min-h-[4.2rem] ${heading}`}>{tier.name}</h3>
              <div className="font-[Aclonica] text-2xl text-[#ff0000]">{tier.price}</div>
              <div className={`text-xs mt-1 mb-4 ${muted}`}>{s.pricing.timeLabel}: {tier.time}</div>
              <p className={`text-sm mb-4 ${body}`}>{tier.summary}</p>
              <ul className="space-y-2 mb-4 flex-1">
                {tier.includes.map((line) => (
                  <li key={line} className={`flex items-start gap-2 text-xs leading-relaxed ${body}`}>
                    <FaCheck className="text-[#ff0000] text-[10px] mt-1 shrink-0" /> {line}
                  </li>
                ))}
              </ul>
              <p className={`text-xs leading-relaxed pt-3 border-t ${muted} ${isDark ? 'border-white/10' : 'border-gray-200'}`}>{tier.note}</p>
            </div>
          ))}
        </div>
        <p className={`text-center text-xs mt-6 ${muted}`}>{s.pricing.note}</p>

        {/* Process */}
        <h2 className={`font-[Aclonica] text-xl md:text-2xl text-center mt-20 mb-10 ${heading}`}>{s.processTitle}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {s.process.map((step, idx) => (
            <li key={step.title} className={`p-5 rounded-xl border ${card}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#ff0000] text-white text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span className={`font-semibold text-sm ${heading}`}>{step.title}</span>
              </div>
              <p className={`text-sm leading-relaxed ${muted}`}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all duration-300 shadow-lg shadow-[#ff0000]/25 hover:scale-105"
          >
            {s.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
