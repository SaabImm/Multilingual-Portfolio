import { FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithubAlt, FaBootstrap } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdOutlineFitScreen } from "react-icons/md"
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Skills() {
    
    return (
        <>
            <div className="min-h-screen">
                <h1 className="font-[Aclonica] font-normal text-3xl w-max m-auto my-20" > 
                    Skills 
                </h1>

                <ul className='grid grid-cols-2 gap-8 justify-items-center content-center text-center font-extralight max-w-1/3 m-auto text-xs sm:grid-cols-3'>
                    <li> <FaHtml5 className='text-4xl'/> HTML </li>
                    <li> <FaCss3Alt className='text-4xl'/> CSS </li> 
                    <li> <IoLogoJavascript className='text-4xl'/> JS </li>
                    <li> <MdOutlineFitScreen className='text-4xl'/> Resp </li>
                    <li> <RiTailwindCssFill className='text-4xl'/> Tailwind </li>
                    <li> <FaGitAlt  className='text-4xl'/> Git </li>
                    <li> <FaGithubAlt  className='text-4xl'/> GitHub </li>
                    <li> <FaSass  className='text-4xl'/> Sass </li>
                    <li> <FaBootstrap   className='text-4xl'/> Boostrap </li>
                </ul>

                
            </div>
        </>
    )
}