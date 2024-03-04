import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import logo from "../assets/img/image-2.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/leetcode.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.png';
export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                <Col sm={6}>
                <img src={logo} alt=""/>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kartik-srivastava-748220202/" target='_blank' rel="noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://leetcode.com/Kartik_Srivas19/" target='_blank' rel="noreferrer"><img src={navIcon2} alt="" style={{filter:"brightness(100%) saturate(100%) hue-rotate(346deg) contrast(100%)",scale:"1.3"}}/></a>
                    <a href="https://www.instagram.com/kartikxsriv" target='_blank' rel="noreferrer"><img src={navIcon3} alt="" /></a>
                    <a href="https://www.github.com/Kartikxz19" target='_blank' rel="noreferrer"><img src={navIcon4} alt="" style={{scale:"2"}}/></a>
                    </div>
                    <p>CopyRight 2024. All Rights Reserved- Kartik</p>
                </Col>

                </Row>
            </Container>
        </footer>
    )
}