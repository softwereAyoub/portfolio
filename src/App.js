import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from './components/about';

import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// activer le plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    
    sectionsRef.current.forEach((section) => {
      
      if (section && section.id != 'line' && section.id != 'line2'  ) {
        gsap.fromTo(
          section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 87%", // déclenche quand l’élément entre dans le viewport
              toggleActions: "play none none reverse",
            },
          }
        );
      }else if(section && (section.id == 'line' || section.id == 'line2' )){

 gsap.fromTo(
        section,
        { width: "0px" }, // état initial
        {
          width: "200px", // état final
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 95%", // déclenche quand la ligne entre dans le viewport
            toggleActions: "play none none reverse",
          },
        }
      );
      }
      
    });
  }, []);

  return (
    <div className="App">
      <NavBar />

      {/* chaque section enregistrée dans ref */}
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Banner />
      </div>

      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <Skills  />
      </div>

      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <About lineRef={(el) => (sectionsRef.current[3] = el)} />
      </div>

      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <Projects lineRef={(el) => (sectionsRef.current[5] = el)} />
      </div>

      <div ref={(el) => (sectionsRef.current[6] = el)}>
        <Contact />
      </div>

     
        <Footer />
 
    </div>
  );
}

export default App;

