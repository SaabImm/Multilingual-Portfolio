import { useDarkMode } from '../Context/contexts';
import { findTech } from '../techs';

export default function IconsThing({ table }) {
  const { isDark } = useDarkMode();

  return (
    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
      {table.map((name) => {
        const tech = findTech(name);
        // Unknown techs still render as a plain tag instead of disappearing.
        const Icon = tech?.icon;
        return (
          <div
            key={name}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-light transition-all duration-300 ${
              isDark
                ? 'bg-white/5 border-white/10 text-gray-300 hover:border-[#ff0000]/30 hover:bg-white/10'
                : 'bg-gray-100/50 border-gray-200/30 text-gray-700 hover:border-[#ff0000]/30 hover:bg-gray-200/50'
            }`}
          >
            {Icon && <Icon className={`text-sm ${tech.color}`} />}
            <span>{tech?.label ?? name}</span>
          </div>
        );
      })}
    </div>
  );
}
