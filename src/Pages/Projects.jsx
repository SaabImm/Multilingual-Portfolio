import { useDarkMode } from '../Context/contexts';
import ProjectItem from "../Components/Project-item";

export default function Projects({ lang }) {
  const { isDark } = useDarkMode();
  const itemsArray = lang.projects.projectItems.map((item) => (
    <ProjectItem key={item.id} lang={lang} item={item} />
  ));

  return (
    <div className={`min-h-screen px-4 py-16 md:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'
    }`}>
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
        isDark ? 'bg-purple-500/5' : 'bg-purple-300/20'
      }`}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className={`font-[Aclonica] text-3xl md:text-4xl w-max mx-auto mb-16 border-b-4 border-[#ff0000] pb-2 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {lang.projects.title}
        </h1>

        <div className="space-y-24 md:space-y-32">
          {itemsArray}
        </div>
      </div>
    </div>
  );
}