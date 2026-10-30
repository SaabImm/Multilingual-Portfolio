import { useEffect } from 'react';
import { useDarkMode } from '../Context/contexts';
import IconsThing from './Icons';
import { FaArrowLeft, FaTimes, FaCheckCircle, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

// Full-screen case study, opened via `#case-<slug>` so it can be linked directly.
export default function CaseStudy({ item, lang, onClose }) {
  const { isDark } = useDarkMode();
  const cs = item.caseStudy;
  const labels = lang.projects.caseStudyLabels;

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const muted = isDark ? 'text-gray-400' : 'text-gray-600';
  const body = isDark ? 'text-gray-300' : 'text-gray-700';
  const heading = isDark ? 'text-white' : 'text-gray-900';
  const card = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200';

  const SectionTitle = ({ children }) => (
    <h2 className={`font-[Aclonica] text-xl md:text-2xl mb-6 ${heading}`}>
      <span className="text-[#ff0000] mr-2">/</span>{children}
    </h2>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className={`fixed inset-0 z-[60] overflow-y-auto ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}
    >
      {/* Top bar */}
      <div className={`sticky top-0 z-10 backdrop-blur-xl border-b ${
        isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <button onClick={onClose} className={`flex items-center gap-2 text-sm ${muted} hover:text-[#ff0000]`}>
            <FaArrowLeft /> {labels.back}
          </button>
          <button onClick={onClose} aria-label={labels.close} className={`text-lg ${muted} hover:text-[#ff0000]`}>
            <FaTimes />
          </button>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 font-[Montserrat]">
        {/* Hero */}
        <p className="text-xs font-mono tracking-wider text-[#ff0000] mb-3 uppercase">{cs.eyebrow ?? labels.eyebrow}</p>
        <h1 className={`font-[Aclonica] text-3xl md:text-5xl leading-tight mb-6 ${heading}`}>{item.title}</h1>
        <p className={`text-base md:text-lg leading-relaxed max-w-3xl mb-8 ${body}`}>{cs.tagline}</p>
        <IconsThing table={item.techs} />
        {item.liveLink && (
          <a
            href={item.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all"
          >
            <FaExternalLinkAlt className="text-xs" /> {labels.visit}
          </a>
        )}

        {cs.stats && <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {cs.stats.map((s) => (
            <div key={s.label} className={`p-4 rounded-xl border text-center ${card}`}>
              <div className="font-[Aclonica] text-2xl md:text-3xl text-[#ff0000]">{s.value}</div>
              <div className={`text-xs mt-1 ${muted}`}>{s.label}</div>
            </div>
          ))}
        </div>}

        {item.images.length > 0 && <img
          src={item.images[0]}
          alt={`${item.title} dashboard`}
          className={`w-full rounded-2xl border shadow-2xl mt-12 ${isDark ? 'border-white/10' : 'border-gray-200'}`}
        />}

        {/* Context + role */}
        <section className="grid md:grid-cols-2 gap-10 mt-16">
          <div>
            <SectionTitle>{labels.context}</SectionTitle>
            <p className={`leading-relaxed ${body}`}>{cs.context}</p>
          </div>
          <div>
            <SectionTitle>{labels.role}</SectionTitle>
            <p className={`leading-relaxed ${body}`}>{cs.role}</p>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16">
          <SectionTitle>{labels.features}</SectionTitle>
          <ul className="grid sm:grid-cols-2 gap-4">
            {cs.features.map((f) => (
              <li key={f.title} className={`p-5 rounded-xl border ${card}`}>
                <div className={`flex items-center gap-2 font-semibold mb-1 ${heading}`}>
                  <FaCheckCircle className="text-[#ff0000] shrink-0" /> {f.title}
                </div>
                <p className={`text-sm leading-relaxed ${muted}`}>{f.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Architecture */}
        {cs.architecture && <section className="mt-16">
          <SectionTitle>{labels.architecture}</SectionTitle>
          <div className="flex flex-col lg:flex-row items-stretch gap-3">
            {cs.architecture.map((layer, idx) => (
              <div key={layer.name} className="flex flex-col lg:flex-row items-center gap-3 flex-1">
                <div className={`w-full h-full p-5 rounded-xl border ${card} ${
                  idx === 1 ? 'border-[#ff0000]/40 shadow-lg shadow-[#ff0000]/10' : ''
                }`}>
                  <div className={`font-semibold mb-2 ${heading}`}>{layer.name}</div>
                  <ul className={`text-sm space-y-1 ${muted}`}>
                    {layer.parts.map((p) => <li key={p}>· {p}</li>)}
                  </ul>
                </div>
                {idx < cs.architecture.length - 1 && (
                  <FaArrowRight className="text-[#ff0000] shrink-0 rotate-90 lg:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </section>}

        {/* Challenges */}
        {cs.challenges && <section className="mt-16">
          <SectionTitle>{labels.challenges}</SectionTitle>
          <div className="space-y-4">
            {cs.challenges.map((c, idx) => (
              <div key={c.title} className={`p-6 rounded-xl border ${card}`}>
                <div className={`font-semibold mb-2 ${heading}`}>
                  <span className="font-mono text-[#ff0000] mr-2">0{idx + 1}</span>{c.title}
                </div>
                <p className={`text-sm leading-relaxed ${body}`}>{c.text}</p>
              </div>
            ))}
          </div>
        </section>}

        {/* Gallery */}
        {item.images.length > 1 && <section className="mt-16">
          <SectionTitle>{labels.gallery}</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {item.images.slice(1).map((src) => (
              <img
                key={src}
                src={src}
                alt={`${item.title} screenshot`}
                loading="lazy"
                className={`w-full rounded-xl border shadow-lg ${isDark ? 'border-white/10' : 'border-gray-200'}`}
              />
            ))}
          </div>
        </section>}

        {/* CTA */}
        <div className={`mt-20 p-8 md:p-10 rounded-2xl border text-center ${card}`}>
          <p className={`font-[Aclonica] text-xl md:text-2xl mb-6 ${heading}`}>{labels.ctaText}</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all shadow-lg shadow-[#ff0000]/25"
          >
            {labels.cta}
          </a>
        </div>
      </article>
    </div>
  );
}
