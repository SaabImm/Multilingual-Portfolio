
import { CgDarkMode } from "react-icons/cg";
import {useDarkMode } from '../Context/Dark-mode'

export default function Navbar(){

 const { isDark, toggleDark } = useDarkMode();  

    return(
        <>
            <div className=' font-[Aclonica] flex flex-row justify-between items-center px-10 font-normal h-16'> 
                <div className='basis-1/6 text-3xl'> B.S </div> 
                <div className='basis-3/6 flex flex-row justify-between'> 


                    <div >  
                        <a href="#home"> Home </a>
                    </div>

                    <div>
                        <a href="#projects"> Projects </a>
                    </div>

                     <div>
                        <a href="#skills"> Skills </a>
                    </div>

                    <div> About </div>
                    <div> Contact Me</div>

                    
                    <button onClick={toggleDark}>
                        <i className='text-2xl'> <CgDarkMode /> </i>
                    </button>

                </div>
            </div>
        </>
    )
} 