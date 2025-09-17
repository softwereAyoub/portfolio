import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Swal from 'sweetalert2'
import { ThreeDot } from "react-loading-indicators";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
const [loading,setLoading]=useState(false)
  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2848baca-7b03-4f03-9c40-b9e5d71317c0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);



    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    Swal.fire({
  title: "Super!",
  text: "Message Sent successfully!",
  icon: "success"
});
setLoading(false)
          setFormDetails({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
    }else{
      setLoading(false)

    }
  }

 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={onSubmit} id="myForm">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} name="FirstName" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" name="LastName" onChange={(e) => onFormUpdate('lastName', e.target.value)} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" name="EmailAddress" onChange={(e) => onFormUpdate('email', e.target.value)} required  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No."  name="PhoneNo" onChange={(e) => onFormUpdate('phone', e.target.value)} required />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" name="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
                      <button type="submit">  {loading ? <ThreeDot color="#7436aa" size="small" text="" textColor="" /> : <span>  {buttonText}</span>} </button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
