import react from 'react'

export default function Navbar(){
    return(
        <>
            <div className='font-[Aclonica] flex flex-row justify-between items-center px-10 font-normal h-16'> 
                <div className='basis-1/6 text-3xl'> B.S </div> 
                <div className='basis-3/6 flex flex-row justify-between'> 
                    <div className='nav-item'> Home </div>
                    <div className='nav-item'> Projects </div>
                    <div className='nav-item'> Skills </div>
                    <div className='nav-item'> About </div>
                    <div className='nav-item'> Contact Me</div>
                </div>
            </div>
        </>
    )
} 