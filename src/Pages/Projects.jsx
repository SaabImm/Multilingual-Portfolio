import React from "react";
import ProjectItem from "../Components/Project-item";
export default function Projects(){
    return(
        <>
            <div className="h-screen">
                <h1 className="font-[Aclonica] font-normal text-3xl w-max m-auto my-20" > 
                    Projects 
                </h1>
                <ProjectItem/>
            </div>

        </>
    )
}