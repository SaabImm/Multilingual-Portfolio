import SazPic from '../assets/Imgs/saz.PNG'
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineFitScreen } from "react-icons/md";

export default function ProjectItem(){
    return(
        <>
            <div className="flex flex-row justify-between max-w-7/10 m-auto ">
                <div> 
                    <img src={SazPic} />
                </div>
                    <div className=" p-20 "> 
                            <div className=' max-w-[290px] flex flex-col gap-y-10' >
                            <div className="discription font-[Montserrat] text-[16px] font-light">
                                <div className='font-[Aclonica] text-[22px] font-bold text-center'> Landing Page </div>
                                <div> Landing pour une agence de voyage, conçue avec HTML CSS et JavaScript </div>
                            </div>

                                <div>
                                    <ul className='grid grid-cols-2 gap-x-8 gap-y-4 justify-items-center content-center  text-center font-extralight'>
                                        <li > <FaHtml5 className='text-4xl'/> HTML </li>
                                        <li> <FaCss3Alt className=' text-4xl' /> CSS </li>
                                        <li> <IoLogoJavascript className=' text-4xl' /> JS </li>  
                                        <li> <MdOutlineFitScreen  className=' text-4xl' /> Resp </li>   
                                    </ul>
                                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
