import { useState } from 'react';
import { useDarkMode } from '../Context/contexts';
import IconsThing from './Icons';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

export default function ProjectItem({ item, lang }) {
  const { isDark } = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = item.images;
  const hasMultiple = images.length > 1;

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="group relative">
      <div
        className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 md:p-10 rounded-2xl border shadow-xl backdrop-blur-sm transition-all duration-500 hover:border-[#ff0000]/30 ${
          isDark
            ? 'bg-white/5 border-white/10 hover:shadow-[#ff0000]/10'
            : 'bg-white/80 border-gray-200/50 hover:shadow-[#ff0000]/20'
        }`}
      >
        {/* Image Carousel */}
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl group/image">
          <div className="relative aspect-video overflow-hidden">
            {images.length === 0 && (
              <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${
                isDark ? 'from-[#ff0000]/10 via-white/5 to-purple-500/10' : 'from-[#ff0000]/10 via-gray-100 to-purple-300/20'
              }`}>
                {item.placeholder && (
                  <span className="font-[Aclonica] text-5xl md:text-6xl text-[#ff0000]">{item.placeholder}</span>
                )}
                <span className={`text-xs uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {lang.projects.screenshotsSoon}
                </span>
              </div>
            )}
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${item.title} screenshot ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  idx === currentIndex
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
                loading="lazy"
              />
            ))}

            {/* Overlay with buttons */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
              <div className="flex gap-4">
                {item.liveLink && (
                  <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#ff0000] text-white text-sm rounded-full hover:bg-[#ff0000]/80 transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> {lang.projects.live}
                  </a>
                )}
                {item.githubLink && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 text-white text-sm rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
                  >
                    <FaGithub /> {lang.projects.code}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={goToPrev}
                className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${
                  isDark
                    ? 'bg-black/50 text-white hover:bg-black/70'
                    : 'bg-white/50 text-gray-800 hover:bg-white/80'
                } backdrop-blur-sm shadow-lg`}
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={goToNext}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 ${
                  isDark
                    ? 'bg-black/50 text-white hover:bg-black/70'
                    : 'bg-white/50 text-gray-800 hover:bg-white/80'
                } backdrop-blur-sm shadow-lg`}
                aria-label="Next image"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </>
          )}

          {/* Dot indicators */}
          {hasMultiple && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'bg-[#ff0000] w-4'
                      : isDark
                      ? 'bg-white/40 hover:bg-white/70'
                      : 'bg-gray-400/60 hover:bg-gray-600/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h3
            className={`font-[Aclonica] text-xl md:text-2xl ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`font-[Montserrat] text-sm md:text-base leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {item.description}
          </p>
          <div className="pt-4">
            <IconsThing table={item.techs} />
          </div>
          {item.caseStudy && (
            <a
              href={`#case-${item.caseStudy.slug}`}
              className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#ff0000] rounded-full hover:bg-[#ff0000]/80 transition-all shadow-lg shadow-[#ff0000]/25 hover:scale-105"
            >
              {lang.projects.caseStudyLabels.open} <FaArrowRight className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}