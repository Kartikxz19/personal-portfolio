import { useState, useEffect } from "react"; //FOr the cool Typing animation
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const toRotate = ["Full Stack", "MERN Stack", "Web Developer"];
    const [loopNum, setloopNum] = useState(0);//Which index string to display on the banner from toRotate array
    const [isDeleting, setisDeleting] = useState(false);//is the word being currently typed in or typed out
    const [text, settext] = useState('');//how much text is currently visible on screen for example : Web Dev-- of Web Developer
    const [delta, setdelta] = useState(300 - Math.random() * 100);//how fast one letter comes after another: approx around 300 ms
    const period = 200;//time to switch between words approx: 2000ms



    useEffect(() => {

        //this function responsible for the typing and deleting animation
        // eslint-disable-next-line
        let ticker = setInterval(() => { tick() }, delta);//the interval in which text would get updated

        //what to do when component unmounts: remove setinterval otherwise it would keep runnning forever
        // eslint-disable-next-line
        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;//which word we are on now? Also we need to rotate back to 1st word so we mod it with length of array
        let fullText = toRotate[i];
        //If you are a=currently deleteing, then you need to decrease one letter from text variable, so we take the substring 0 to text.length-1
        //But if you are typing right now, then you need to increase one letter in text, so we take subtring 0 to text.length +1
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        settext(updatedText);
        //if we are deleting then we reduce the setInterval timer to half so that deleting happens faster than typing
        if (isDeleting) {
            setdelta(prevdelta => prevdelta / 2);//deleting becomes faster with each  passing frame
        }
        //if while you were typing and adding one-one letter to updatedtext, your updated text became equal to fulltext, then you need to start deleting
        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setdelta(period);//set delta back to its normal pace
        }
        else if (isDeleting && updatedText === "")//you were deleting and now your word has been completely deleted
        {
            setisDeleting(false);
            //go to next word
            setloopNum(loopNum + 1);
            setdelta(300);

        }
    }
    //NOte: we have put className="align-items-center" in ROw component to vertically align all the banner content in center. Otherwise, the banner content will go behind the navbar, since navbar has zindex:99999
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
                                    <span className="tagline">Welcome to my Portfolio!</span>
                                    {/* Here we put our typing text animation */}
                                    <h1>{`Hi I'm Kartik!`} <span className="wrap">{text}...</span></h1>
                                    <p>I am a full stack web developer who constantly engages in new projects and problems, while also working on my problem solving skills via LeetCode</p>
                                    <a href="#connect">
                                        <button href="#connect" onClick={() => { console.log("Connect") }}>Let's Connect  <ArrowRightCircle size={25} /></button>
                                    </a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
};
export default Banner;