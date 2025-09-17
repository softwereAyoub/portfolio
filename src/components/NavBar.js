import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
     
              <button  onClick={()=>setNav(true)} className={nav ? "hidden   " : "md:hidden pl-[10px] "}>
            <span className="navbar-toggler-icon"></span>

          </button>
          {nav ? <div className=" flex flex-col absolute left-0 top-[0px] p-[20px] h-[100vh] w-full bg-black ">
            <FontAwesomeIcon icon={faXmark} onClick={()=>setNav(false)} className="cursor-pointer absolute right-[30px] " fontSize={25}/>
             <Nav className="flex flex-col gap-[10px] mt-[20px]  ">
              <Nav.Link  href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('home'); if(nav){setNav(false)}}}>Home</Nav.Link>
              <Nav.Link  href="#technologies" className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('technologies') ; if(nav){setNav(false)}}}>Technologies</Nav.Link>
                            <Nav.Link  href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('about') ; if(nav){setNav(false)}}}>About</Nav.Link>

              <Nav.Link  href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {onUpdateActiveLink('projects') ; if(nav){setNav(false)}}}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text z-10 flex flex-wrap  ">
              <div className="social-icon">
       <a href="https://linkedin.com/in/ayoub-bouguerne-945b62356" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=61578144827824" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/bg_soft/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
            
                <a href="https://linkedin.com/in/ayoub-bouguerne-945b62356" target="_blank"><button className="vvd"><span>Let’s Connect</span></button></a>
             
            </span></div>:  <Navbar.Collapse className="flex justify-center flex-wrap  ">
            <Nav className="">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#technologies" className={activeLink === 'technologies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('technologies')}>Technologies</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>

              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/in/ayoub-bouguerne-945b62356" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=61578144827824" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/bg_soft/" target="_blank"><img src={navIcon3} alt="" /></a>
              </div>
=                <a href="https://linkedin.com/in/ayoub-bouguerne-945b62356" target="_blank"><button className="vvd"><span>Let’s Connect</span></button></a>
            
            </span>
          </Navbar.Collapse>}



         
         
        </Container>
      </Navbar>
    </Router>
  )
}
