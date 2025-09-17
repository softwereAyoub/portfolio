
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhp ,faReact ,faLaravel} from '@fortawesome/free-brands-svg-icons'
import { faN ,faDatabase } from '@fortawesome/free-solid-svg-icons'

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section id="projects" className=" flex bg-black max-sm:px-[0px]  flex-col gap-[30px] py-[30px] px-[90px]  max-lg:pl-[50px] " >
 
      <div className="project  max-sm:pl-[50px]  text-center">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-pink-500">Projects</h2>
                             <div className=" h-[5px] w-[200px] line2 " ></div>

                <p className=" text-gray-400 ">In this section, you’ll find a selection of projects that reflect my skills, creativity, and passion for development. Each project represents a unique challenge I’ve taken on — from building responsive websites to developing interactive applications. I focus on writing clean and efficient code while also paying attention to design and user experience. These projects showcase not only my technical abilities but also my commitment to learning, problem-solving, and delivering practical solutions.</p>
                </div>
                <div  className="w-[90%]  max-lg:w-[95%] max-sm:mx-auto max-lg:flex-col proj1 lg:h-[320px] max-lg:gap-[15px]  gap-[8px] flex items-center justify-between p-[28px] ">

                  <div className="lg:w-[50%] flex flex-col gap-[10px] ">
<h3 className=" text-[23px] font-semibold " >Project E-commerce</h3>
<p className=" w-full ">A complete website for selling computers with a great control panel for products under the control of the admin. I applied the technologies and gained a great and useful experience.</p>
                  <h3 className=" text-[17px] font-semibold ">Technologies Used : </h3>

                  <div className=" flex items-center gap-[15px] flex-wrap ">
                    <div className=" bg-[#1b263b55] flex items-center justify-center w-[100px] rounded-full gap-[7px] ">
                        <FontAwesomeIcon icon={faPhp} className="w-[60px] h-[40px] "  alt=""  />
{/* <span className=" text-[15px] font-medium ">PHP</span> */}
                    </div>
                     <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[8px] justify-center w-[120px] rounded-full  gap-[4px]">
<FontAwesomeIcon icon={faN} className="w-[50px] h-[25px] " />
<span className=" text-[15px] font-medium ">NextJs</span>
                    </div>

                         <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[8px] justify-center w-[120px] rounded-full gap-[7px] ">
<FontAwesomeIcon icon={faDatabase} className="w-[50px] h-[25px]"  />
<span className=" text-[15px] font-medium "> MySQL</span>
                    </div>
                  </div>

                  </div>
                                    <img src="capture1.png" className="lg:w-[50%] h-full  rounded-[3px] "/>

                </div>

   <div  className="w-[90%] proj3 lg:h-[320px] max-lg:w-[95%] max-sm:mx-auto  max-lg:flex-col max-lg:gap-[15px] flex items-center justify-between p-[28px] ">

                  <div className="lg:w-[60%] flex flex-col gap-[10px] ">
<h3 className=" text-[23px] font-semibold " >Project Inventory Management</h3>
<p className=" w-full ">Great web application for inventory and goods management, very good for shops, we created a distinctive control panel, gained useful experience</p>
                  <h3 className=" text-[17px] font-semibold ">Technologies Used : </h3>

                  <div className=" flex items-center gap-[15px] flex-wrap ">
                    <div className=" bg-[#1b263b55] flex items-center justify-center    py-[5px] w-[120px] rounded-full gap-[7px] ">
                      <FontAwesomeIcon icon={faLaravel} className="w-[30px] h-[30px] "  alt=""  color="#adb5bd"/>

<span className=" text-[15px] font-medium ">Laravel</span>
                    </div>
                     <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[5px] justify-center w-[120px] rounded-full gap-[7px] ">
  <FontAwesomeIcon icon={faReact} className="w-[60px] h-[30px] "  alt=""  />
<span className=" text-[15px] font-medium ">ReactJs</span>
                    </div>

                         <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[8px] justify-center w-[120px] rounded-full gap-[7px] ">
<FontAwesomeIcon icon={faDatabase} className="w-[50px] h-[25px] "  />
<span className=" text-[15px] font-medium "> MySQL</span>
                    </div>
                  </div>

                  </div>
                                    <img src="capture3.png" className="lg:w-[50%] h-full  rounded-[3px] "/>

                </div>

                    <div  className="w-[90%] proj2 lg:h-[320px]  max-lg:w-[95%] max-sm:mx-auto max-lg:flex-col max-lg:gap-[15px]  flex items-center justify-between p-[28px] ">

                  <div className="lg:w-[60%] flex flex-col gap-[10px] ">
<h3 className=" text-[23px] font-semibold " >Project Managing School Support</h3>
<p className=" w-full ">An application for managing school support centers, an application that meets all the center's needs and is easy to manage. A wonderful experience and the acquisition of new and useful information.</p>
                  <h3 className=" text-[17px] font-semibold ">Technologies Used : </h3>

                  <div className=" flex items-center gap-[15px] flex-wrap ">
                    <div className=" bg-[#1b263b55] flex items-center justify-center w-[100px] rounded-full gap-[7px] ">
                        <FontAwesomeIcon icon={faPhp} className="w-[60px] h-[40px] "  alt=""  />
{/* <span className=" text-[15px] font-medium ">PHP</span> */}
                    </div>
                     <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[5px] justify-center w-[120px] rounded-full gap-[7px] ">
  <FontAwesomeIcon icon={faReact} className="w-[60px] h-[30px] "  alt=""  />
<span className=" text-[15px] font-medium ">ReactJs</span>
                    </div>

                         <div className=" bg-[#1b263b55] flex items-center px-[13px] py-[8px] justify-center w-[120px] rounded-full gap-[7px] ">
<FontAwesomeIcon icon={faDatabase} className="w-[50px] h-[25px] "  />
<span className=" text-[15px] font-medium "> MySQL</span>
                    </div>
                  </div>

                  </div>
                                    <img src="capture2.png" className="lg:w-[50%] h-full  rounded-[3px] "/>

                </div>

               
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
