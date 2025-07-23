import React from "react";
import ProjectItem from "../Components/Project-item";

import Data from '../Data'



export default function Projects(){

    const dataArray=Data.map((item)=>{
      
      return <ProjectItem
              key={item.id} 
              entry={item} //Object Prop
      />
  }) 

    return(
        <>
            <div className="min-h-screen ">
                <h1 className="font-[Aclonica] font-normal text-3xl w-max m-auto my-20" > 
                    Projects 
                </h1>

                <div>
                    {dataArray}
                </div>
            </div>

        </>
    )
}