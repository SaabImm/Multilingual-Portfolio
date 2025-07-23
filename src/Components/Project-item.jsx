
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineFitScreen } from "react-icons/md";
import IconsThing  from "./Icons";

import saz3 from '../assets/Imgs/saz3.PNG'

export default function ProjectItem(props){

    return(
        <>
            <div className="flex flex-row justify-between items-center max-w-7/10 m-auto my-[150px]">
                <div className=" w-[670px] min-h-[250px] border-2 "> 
                    <img src={props.entry.img} />
                </div>
                    <div className=" p-20 "> 
                            <div className=' max-w-[290px] flex flex-col gap-y-10' >
                            <div className="discription font-[Montserrat] text-[16px] font-light">
                                <div className='font-[Aclonica] text-[22px] font-bold text-center'> {props.entry.title}</div>
                                <div> {props.entry.text}</div>
                            </div>
                            <IconsThing table={props.entry.techs} />          

                        </div>
                    </div>
            </div>

            

        </>
    )
}
