import React from "react"


export default function About({lineRef}){
    return(
        <section id="about" className="about bg-black max-lg:flex-col-reverse max-lg:px-[40px] max-lg:gap-[20px] py-[30px] flex lg:items-center justify-around px-[40px] " >
           <div className=" flex flex-col max-lg:justify-start w-[50%] max-lg:w-[100%] gap-[20px] ">
         <div className="  ">
                <h2 className=" text-[39px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-pink-500 to-pink-500 " >Who I am</h2>
             <div id="line" ref={lineRef} className=" h-[5px]  line " ></div>
           </div> 
                       <p className=" leading-7 text-[20px] text-gray-300  " >I am Ayoub Bouguerne, born in Agadir, Morocco. I studied web programming for two years and obtained a specialized technician certificate , I’m a passionate and motivated developer with a strong interest in creating modern, user-friendly, and efficient digital experiences. With a solid foundation in web development, I enjoy turning ideas into interactive applications that combine clean design with practical functionality. I’m constantly learning and exploring new technologies to improve my skills and deliver better solutions. Beyond coding, I value problem-solving, creativity, and collaboration, which drive me to grow both personally and professionally  .</p>

         </div>
           <div className="card w-[30%] max-md:w-[55%] rounded-[6px] "  >
                        <img src="cv.jpg" alt="profil" className=" w-[100%] rounded-[6px] " />

           </div>
        </section>
    )
}