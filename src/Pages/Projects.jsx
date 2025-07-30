import ProjectItem from "../Components/Project-item";
import { useLangueContext } from '../Context/translation'

export default function Projects({lang}){
    const {t} = useLangueContext();
    const itemsArray=t.projects.projectItems.map((item) =>{

        return <ProjectItem
            key={item.id} 
            lang={t}
            item={item} 
      />
})



    return(
        <>
            <div className="min-h-screen">
                <h1 className="font-[Aclonica] font-normal text-4xl w-max m-auto my-20 border-b-4 border-[#ff0000]" > 
                    {lang.projects.title} 
                </h1>

                <div>
                    {itemsArray}
                </div>
            </div>

        </>
    )
}