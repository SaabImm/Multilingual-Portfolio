import image from "../assets/Imgs/SabrinaAvatar.jpg"

export default function About({lang}){
    return(
        <>
        <div className=" min-h-screen md:w-1/2 w-2/3 m-auto">
            <h1 className=" font-[Aclonica] font-normal text-4xl w-max m-auto my-20 border-b-4 border-[#ff0000]" > 
                {lang.about.title} 
            </h1>
            <div className=" flex md:flex-row flex-col justify-between items-center gap-20 ">
                <div className= "  basis-1/3"> <img src={image} alt="Sabrina Avatar" loading="lazy"/></div>
                <div className="  basis-2/3 font-[Montserrat] text-[16px] font-light text-center">
                    {lang.about.bio}
                </div>
            </div>
        </div>
        </>
    )
    
}