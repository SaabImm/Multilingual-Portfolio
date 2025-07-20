import SazPic from '../assets/Imgs/saz.PNG'


export default function ProjectItem(){
    return(
        <>
            <div className="Container"> 
                <div className="Project-item-img"> 
                    <div className="img">
                        <img src={SazPic} />
                    </div>
                </div>
                <div className="project-item-info"> 
                    <div className="discription">
                        <span> I made this with lots of love and i don't know what else</span>
                        <div className='project-item-icons'>
                            <ul>
                                <li> <i> icon </i> </li>
                                <li> <i> icon </i> </li>
                                <li> <i> icon </i> </li>
                                <li> <i> icon </i> </li>
                                <li> <i> icon </i> </li>   
                            </ul>
                         </div>
                    

                    </div>
                </div>
            </div>
        </>
    )
}
