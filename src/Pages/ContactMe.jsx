import {FaGithubAlt, FaLinkedin } from "react-icons/fa"
import { SiFiverr } from "react-icons/si";

export default function Contact({lang}){
    return(
        <>
        <div className="min-h-screen w-1/2 m-auto gap-10">
            <h1 className="font-[Aclonica] font-normal text-4xl w-max m-auto my-20 border-b-4 border-[#ff0000]" > 
                {lang.contact.title} 
            </h1>

            <div className="font-[Montserrat] text-[16px] font-light text-center my-10">
                {lang.contact.text}
            </div>

            <ul className=' grid grid-cols-3 gap-8 justify-items-center content-center text-center font-extralight lg:w-1/3 w-full m-auto text-sm'>
                <li> <a href="https://www.fiverr.com/s/qDrvwjZ" target="_blank" rel="noopener noreferrer"> <SiFiverr className='text-5xl'/> Fiver </a> </li>
                <li> <a href="https://www.linkedin.com/in/saab-imm-4697a8320" target="_blank" rel="noopener noreferrer"> <FaLinkedin className='text-5xl'/> LinkedIn </a></li> 
                <li> <a href="https://github.com/SaabImm" target="_blank" rel="noopener noreferrer"> <FaGithubAlt  className='text-5xl'/> GitHub </a> </li>
            </ul>
        </div>
        </>
    )
    
}