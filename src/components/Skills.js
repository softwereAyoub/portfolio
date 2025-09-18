
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPhp ,faReact ,faLaravel,faJs ,faNodeJs , faGit,faBootstrap} from '@fortawesome/free-brands-svg-icons'
import { faN ,faDatabase } from '@fortawesome/free-solid-svg-icons'

export const Skills = ({lineRef}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill max-lg:w-[95%] " id="technologies">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className=" tracking-[1px] max-sm:text-start">Technologies </h2>
                        <p className="max-sm:text-start">The technologies and techniques that I have studied and  used in completing  many projects are <br/> among the best technologies in web programming today.</p>
                     

                        <div className=" flex gap-[0px] h-[140px] z-[4] max-md:w-full   w-[90%] m-auto relative technologie items-center  overflow-hidden">
    

<div className="parents1   flex gap-[50px]   absolute  m-auto ">
  

 <div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faLaravel} className="w-[150px] h-[60px]"  alt=""  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">Laravel</h3>
</div>
<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
  <FontAwesomeIcon icon={faReact} className="w-[150px] h-[60px] " color="#adb5bd"  alt=""  />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">ReactJs</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faN} className="w-[150px] h-[60px]" color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> NextJs</h3>
</div>

 <div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faNodeJs} className="w-[150px] h-[60px]" color="#adb5bd" />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">NodeJs</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
  <FontAwesomeIcon icon={faPhp} className="w-[150px] h-[60px] " color="#adb5bd"  alt=""  />
<h3 className=" text-gray-400  text-[16px]  ">PHP</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faBootstrap} className="w-[150px] h-[60px]"  alt=""  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">Bootstrap</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
 <img src="tail.svg" alt="Image" className=" w-[300px] h-[60px]  "/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> TailwindCSS</h3>
</div>


 <div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faJs} className="w-[150px] h-[60px]"  color="#adb5bd" />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">JavaScript</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faDatabase} className="w-[150px] h-[60px]"  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> MongoDB</h3>
</div>


<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
 <img src="mysql.png" alt="Image" className="  h-[60px]  "/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> MySQL</h3>
</div>


<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faGit} className="w-[150px] h-[60px]"  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> Git & Github</h3>
</div>

 {/* <img src="next2.png" alt="Image" className="w-[100px] rounded-full h-[60px]  bg-gray-300"/> */}





</div>



<div className="parents2  flex gap-[50px]  absolute  m-auto ">

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faLaravel} className="w-[150px] h-[60px]"  alt=""  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">Laravel</h3>
</div>
<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
  <FontAwesomeIcon icon={faReact} className="w-[150px] h-[60px] " color="#adb5bd"  alt=""  />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">ReactJs</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faN} className="w-[150px] h-[60px]" color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> NextJs</h3>
</div>

 <div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faNodeJs} className="w-[150px] h-[60px]" color="#adb5bd" />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">NodeJs</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
  <FontAwesomeIcon icon={faPhp} className="w-[150px] h-[60px] " color="#adb5bd"  alt=""  />
<h3 className=" text-gray-400  text-[16px]  ">PHP</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faBootstrap} className="w-[150px] h-[60px]"  alt=""  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">Bootstrap</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
 <img src="tail.svg" alt="Image" className=" w-[300px] h-[60px]  "/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> TailwindCSS</h3>
</div>

 <div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faJs} className="w-[150px] h-[60px]"  color="#adb5bd" />
<h3 className=" text-gray-400  text-[16px] tracking-[1px] ">JavaScript</h3>
</div>

<div className=" flex flex-col gap-[18px] align-center bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faDatabase} className="w-[150px] h-[60px]"  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> MongoDB</h3>
</div>


<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
 <img src="mysql.png" alt="Image" className="  h-[60px]  "/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> MySQL</h3>
</div>


<div className=" flex flex-col gap-[18px] align-center w-[160px] bg-[#24242355] py-[20px] rounded-[8px] ">
<FontAwesomeIcon icon={faGit} className="w-[150px] h-[60px]"  color="#adb5bd"/>
<h3 className=" text-gray-400  text-[16px] tracking-[1px] "> Git & Github</h3>
</div>


</div>


</div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
