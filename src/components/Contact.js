import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import contactImg from "../assets/img/contact-img.svg"
export const Contact=()=>{
    const formInitialDetails={
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        message:""
    }
    const [formDetails, setformDetails] = useState(formInitialDetails);
    //applying animation to submit button via useState hook which changes the text written in submit button to-submitting when btn is pressed and api call is triggered
    const [buttonText,setButtonText]=useState('Submit');
    //status whether mail was sent successfully or not via the api
    const [status, setstatus] = useState({});
    const handleChange=(e)=>{
        setformDetails({
            ...formDetails,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async (e)=>{
        //for mail server we are using nodemailer
        e.preventDefault();
        setButtonText("Sending...");
        let response=await fetch("http://localhost:5000/contact",{
            method:'POST',
            headers:{
                "Content-Type":"application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails),
        });
        let result=await response.json();
        setButtonText("Send");
        setformDetails(formInitialDetails);
        if(result.code===200)
        {
            setstatus({success:true,message:'Message Sent Successfully !'});
        }
        else{
            console.log(result);
            setstatus({success:false,message:'Something went wrong :('});
        }
    };
    return(
        /* id are important as they will help us to navigate to a section from the links in the navbar */
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                {/* First col for contact image */}
                    <Col md={6}>
                    <img src={contactImg} alt=""/>
                    </Col>
                    {/* Second col for actual form */}
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstName" value={formDetails.firstName} placeholder="Enter First Name" onChange={handleChange} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastName" value={formDetails.lastName} placeholder="Enter Last Name" onChange={handleChange} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" value={formDetails.email} placeholder="Enter Email" onChange={handleChange} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="number" name="phone" value={formDetails.phone} placeholder="Enter Phone Number" onChange={handleChange} />
                                </Col>
                                {/* FOr the message */}
                                <Col >
                                  <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={handleChange}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {/* Status message from api , depending on success or danger */}
                                {
                                    
                                    status.message&&
                                    <Col>
                                        <p className={status.success === false?"danger":"success"}>{status.message}</p>
                                    </Col>
                                    
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}