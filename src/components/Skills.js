import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"


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
export const Skills=()=>{
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        {/* We used Row, COl to use bootstrap grid and make our h2 and p tag responsive,(Carousel is already responsive due to its styles at the top). WE don;t have to use media-queries and use grid to make all things responsive */}
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>I am mainly focused in Web Development ranging from methodological styling in the frontend to comprehensive backend. Recently I have started pursuing blockchain development as my next exploring area.</p>
                            <Carousel responsive={responsive} infinite= {true} className="skill-slider">
                                
                                <div className="item">
                                <img src={meter1} alt=""  />
                                <h5>Frontend Development</h5>
                                </div>

                                <div className="item">
                                <img src={meter2} alt=""  />
                                <h5>Data Structures</h5>
                                </div>

                                <div className="item">
                                <img src={meter3} alt=""  />
                                <h5>Backend Development</h5>
                                </div>

                                <div className="item">
                                <img src={meter1} alt=""  />
                                <h5>Blockchain Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />{/* Like a gradient cicle at the bottom */}
        </section>
    );
}