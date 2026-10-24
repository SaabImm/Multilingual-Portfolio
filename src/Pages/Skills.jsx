import { useDarkMode } from '../Context/contexts';
import { useState } from "react";
import { techs, skillCategories } from "../techs";

export default function Skills({ lang }) {
  const { isDark } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-[#ff0000]/5' : 'bg-[#ff0000]/10'
      }`}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-6 border-b-4 border-[#ff0000] pb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {lang.skills.title}
        </h1>

        <p className={`text-center text-sm mb-16 max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {lang.skills.subtitle}
        </p>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.key}>
              <h2 className={`text-xl md:text-2xl font-semibold text-center mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {category.emoji} {lang.skills.categories[category.key]}
              </h2>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
                {category.items.map((techKey, idx) => {
                  const skill = techs[techKey];
                  const globalIndex = catIndex * 10 + idx;
                  const Icon = skill.icon;
                  const isHovered = hoveredIndex === globalIndex;
                  return (
                    <li
                      key={techKey}
                      className="relative group"
                      onMouseEnter={() => setHoveredIndex(globalIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className={`
                        p-4 rounded-xl text-center transition-all duration-300
                        ${isDark
                          ? 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-[#ff0000]/30'
                          : 'bg-gray-100/50 border-gray-200/30 hover:bg-gray-200/50 hover:border-[#ff0000]/30'
                        }
                        border backdrop-blur-sm
                        ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-[#ff0000]/10' : ''}
                      `}>
                        <Icon className={`
                          text-4xl md:text-5xl mx-auto mb-2 transition-all duration-300
                          ${skill.color}
                          ${isHovered ? 'scale-110' : ''}
                        `} />
                        <div className={`text-xs md:text-sm font-light ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.label}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}