import { FaHtml5, FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { MdOutlineFitScreen } from "react-icons/md"
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";



export default function IconsThing({table}){

    return(
    <>
        <ul className={'grid grid-cols-2 gap-x-8 gap-y-4 justify-items-center content-center text-center font-extralight'}>
        { table.map((ellm) => {
            switch (ellm) {
                case 'HTML':
                    return <li key={ellm}> <FaHtml5 className='text-6xl m-auto'/> HTML </li>;
                case 'CSS':
                    return <li key={ellm}> <FaCss3Alt className='text-6xl m-auto' /> CSS </li> ;
                case 'JavaScript':
                    return  <li key={ellm}> <IoLogoJavascript className='text-6xl m-auto' /> JavaScript + ES6 </li> ;
                case 'Responsive':
                    return <li key={ellm}> <MdOutlineFitScreen  className='text-6xl m-auto' /> Responsive Design </li> ;
                case 'React':
                    return <li key={ellm}> <FaReact  className='text-6xl m-auto'/> React </li> ;
                case "Tailwind":
                    return <li key={ellm}> <RiTailwindCssFill className='text-6xl m-auto'/> TailwindCSS </li> ;

                
                default:
                return <li key={ellm}>❓ Unknown Tech</li>;
            }
        }
        
            )}
        </ul>
    </>
    )
}