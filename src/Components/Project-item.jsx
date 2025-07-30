import IconsThing  from "./Icons";


export default function ProjectItem({item}){
    return(
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center w-2/3 m-auto     my-[150px]">
                <div className="w-full lg:w-[670px] "> 
                    <img src={item.img} />
                </div>

                <div className="lg:p-20 p-10 lg:w-1/2"> 
                    <div className=' flex flex-col gap-y-10' >
                        <div className="font-[Montserrat] text-[16px] font-light">
                            <div className='font-[Aclonica] text-[22px] font-bold text-center'> {item.title}</div>
                            <div> {item.description}</div>
                        </div>
                        <IconsThing table={item.techs} />          

                    </div>
                </div>
            </div>

            

        </>
    )
}
