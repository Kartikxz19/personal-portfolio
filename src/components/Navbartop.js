import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import logo from '../assets/img/image-2.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/leetcode.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.png';
export const Navbartop=()=>{
    //now to highlight which link in the navbar is active right now.
    // Hence we use useState to change state on which component is being accessed currently
    const [activeLink,setActiveLink]=useState('home');
    //to check whether user has started scrolling or not we again use useState
    const[scrolled , setScrolled] = useState(false);
    //useEffect to trigger a side effect i.e., change the value of scrolled state to true
    useEffect(() => {
        const Onscroll=()=>{
            if(window.scrollY>50)
            {
                //you have scrolled more than the top section
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }
        //now add an event listener on your mouse scroll to run the above function
        window.addEventListener("scroll",Onscroll);
        //but remove it also otherwise it will be stuck forever
        return () => window.removeEventListener("scroll",Onscroll);
    }, []);//ek hi baar trigger karna hai useeffect ko. Jb bhi page render ho e useEffect chala do jo ki window scroll par ek event listener daal dega. Baaki wo event listener apna kaam dekh lega. Problem this ki event listener ko laganaa scrll par every time the page is full rendered. Wo useEffect se ho gya.

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" > 
          {/* Lets add a icon to use the drop down when navbar collapses on mobile view */}
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {/* we want the link to become when user is accessing that part, so use an onCLick */}
              <Nav.Link href="#home" className={activeLink==='home'?"active navbar-link top-links":'navbar-link top-links'} onClick={()=>{onUpdateActiveLink('home')}}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skills'?"active navbar-link top-links":'navbar-link top-links'} onClick={()=>{onUpdateActiveLink('skills')}}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink==='projects'?"active navbar-link top-links":'navbar-link top-links'} onClick={()=>{onUpdateActiveLink('projects')}}>Projects</Nav.Link>
              
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kartik-srivastava-748220202/" target='_blank' rel="noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://leetcode.com/Kartik_Srivas19/" target='_blank' rel="noreferrer"><img src={navIcon2} alt="" style={{filter:"brightness(100%) saturate(100%) hue-rotate(346deg) contrast(100%)",scale:"1.3"}}/></a>
                    <a href="https://www.instagram.com/kartikxsriv" target='_blank' rel="noreferrer"><img src={navIcon3} alt="" /></a>
                    <a href="https://www.github.com/Kartikxz19" target='_blank' rel="noreferrer"><img src={navIcon4} alt="" style={{scale:"2"}}/></a>

                </div>
                {/* Button to message me */}
                <a href="#connect">
                <button  className="message" onClick={()=>{console.log('Connect')}}>
                    <span>Let's Connect</span>
                </button>
                </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};