import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { useDarkMode } from '../Context/Dark-mode'
import { useLangueContext } from '../Context/translation'
import { IoMenu } from "react-icons/io5";

export default function Navbar({lang}){

    const { isDark, toggleDark } = useDarkMode(); 
    const { language, toggleLang} = useLangueContext();
    const [open, setOpen]=  useState(false)
    const toggleMenu= ()=>{
        setOpen(prev => !prev)
    }
    
    return(
        <>
            <div className='flex font-[Aclonica] flex-row justify-between items-center px-10 font-normal h-16'> 
                <div className="flex flex-row lg:justify-between justify-around items-center w-full">
                    <div className='text-3xl'> B.S </div> 

                    <div className="relative inline-block text-left lg:hidden left-0">
                        <button onClick={toggleMenu}>
                            <i className='text-2xl'> <IoMenu /> </i>
                        </button>
                        {open && (
                            <div className="absolute mt-2 w-24 rounded-md shadow-lg ">
                            <ul className="py-1">
                                <li className=" py-2 cursor-pointer"><a href="#home"> Home </a></li>
                                <li className=" py-2 cursor-pointer"><a href="#projects"> Projects </a></li>
                                <li className=" py-2 cursor-pointer"><a href="#skills"> Skills </a></li>
                            </ul>
                            </div>
                      )}
                    </div>
                </div>
                
                <div className='hidden lg:flex basis-5/6 flex-row justify-between'> 


                    <div >  
                        <a href="#home"> { lang.navbar.home } </a>
                    </div>

                    <div>
                        <a href="#projects"> {lang.navbar.projects} </a>
                    </div>

                     <div>
                        <a href="#skills"> {lang.navbar.skills} </a>
                    </div>

                    <div> {lang.navbar.about}  </div>
                    <div> {lang.navbar.contact}</div>

                    
                    <button onClick={toggleDark}>
                        <i className='text-2xl'> <CgDarkMode /> </i>
                    </button>

                    <button onClick={toggleLang}>
                        <span> {language}</span>
                    </button>



                </div>


                

            </div>


        </>
    )
} 