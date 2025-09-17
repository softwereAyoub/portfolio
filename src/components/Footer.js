import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer p-[15px] shadow">
      <Container>
        <Row className="align-items-center   flex justify-center ">
        
        
          <Col size={12} sm={6} className="text-center  ">
            <div className="social-icon">
              <a href="https://linkedin.com/in/ayoub-bouguerne-945b62356" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=61578144827824" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/bg_soft/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright © 2025 Developed By Ayoub Bouguerne</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
