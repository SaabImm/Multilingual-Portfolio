import { FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithubAlt, FaBootstrap } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdOutlineFitScreen } from "react-icons/md"
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";


export default function Skills({lang}) {
    
    return (
        <>
            <div className="min-h-screen">
                <h1 className=" font-[Aclonica] font-normal text-3xl w-max m-auto my-20 border-b-4 border-[#ff0000]" > 
                    {lang.skills.title}
                </h1>

                <ul className=' grid grid-cols-2 gap-8 justify-items-center content-center text-center font-extralight w-1/3 m-auto text-sm lg:grid-cols-3'>
                    <li> <FaHtml5 className='text-6xl m-auto my-2'/> HTML</li>
                    <li> <FaCss3Alt className='text-6xl m-auto my-2'/> CSS </li> 
                    <li> <IoLogoJavascript className='text-6xl m-auto my-2'/> JavaScript + ES6 </li>
                    <li> <MdOutlineFitScreen className='text-6xl  m-auto my-2'/>  Responsive Design </li>
                    <li> <RiTailwindCssFill className='text-6xl m-auto my-2'/> TailwindCSS </li>
                    <li> <FaGitAlt  className='text-6xl m-auto my-2'/> Git </li>
                    <li> <FaGithubAlt  className='text-6xl m-auto my-2'/> GitHub </li>
                    <li> <FaSass  className='text-6xl m-auto my-2'/> Sass </li>
                    <li> <FaBootstrap   className='text-6xl m-auto my-2'/> Boostrap </li>
                </ul>

                
            </div>
        </>
    )
}