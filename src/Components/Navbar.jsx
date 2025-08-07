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
        <>  <nav className="relative">
                <div className='fixed backdrop-blur-sm top-0 right-0 left-0 flex font-[Aclonica] justify-between items-center px-12 py-4'> 
                    <div className="flex lg:justify-start justify-around items-center w-full gap-10">
                        <div className='text-3xl'> B.S </div> 
                        <button onClick={toggleDark}>
                            <i className='text-2xl'> <CgDarkMode /> </i>
                        </button>

                        <button onClick={toggleLang}>
                            <span> en / fr</span>
                        </button>

                        <div className="relative inline-block text-left lg:hidden ">
                            <button onClick={toggleMenu}>
                                <i className='text-2xl'> <IoMenu /> </i>
                            </button>
                            {open && (
                                <div className="absolute mt-2 w-24 rounded-md shadow-lg left-[-2rem]">
                                <ul className="py-1 ">
                                    <li className=" py-2 cursor-pointer"><a href="#home"> Home </a></li>
                                    <li className=" py-2 cursor-pointer"><a href="#projects"> Projects </a></li>
                                    <li className=" py-2 cursor-pointer"><a href="#skills"> Skills </a></li>
                                    <li className=" py-2 cursor-pointer"><a href="#about"> About </a></li>
                                    <li className=" py-2 cursor-pointer"><a href="#contact"> Contact </a></li>
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

                        <div> 
                            <a href="#about"> {lang.navbar.about} </a>  
                        </div>
                        <div> 
                            <a href="#contact"> {lang.navbar.contact}</a> 
                        </div>



                    </div>


                    

                </div>
            </nav>


        </>
    )
} 