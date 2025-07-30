import React from 'react'

export default function Home({lang}){

    return(
        <>
            
            <div className='flex flex-col justify-center max-w-8/10 h-screen my-10 px-10 lg:mx-15'>
                <div className='font-[Aclonica] text-[30px] lg:text-[44px] font-bold lg:my-0'>
                    {lang.home.title}
                </div>

            
            </div>
        
        </>
    )
}