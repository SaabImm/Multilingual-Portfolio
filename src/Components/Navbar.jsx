import react from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className='font-[Aclonica] flex flex-row justify-between items-center px-10 font-normal h-16'> 
                <div className='basis-1/6 text-3xl'> B.S </div> 
                <div className='basis-3/6 flex flex-row justify-between'> 
                    <div >  
                        <a href="#home"> Home </a>
                    </div>

                    <div>
                        <a href="#projects"> Projects </a>
                    </div>
                    
                    <div> Skills </div>
                    <div> About </div>
                    <div> Contact Me</div>
                </div>
            </div>


            <Outlet />
        </>
    )
} 