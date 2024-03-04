
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import telekiosk from "../assets/img/telekiosk.png"
import Attendance from "../assets/img/Attendance.png"
import Deadlock from "../assets/img/Deadlock.png"
import iNoteBook from "../assets/img/iNoteBook.png"
import Java_text from "../assets/img/Java-text.png"
import newsmonkey from "../assets/img/newsmonkey.png"
import Sorting from "../assets/img/Sorting.png"
import textutils from "../assets/img/textutils.png"
export const Projects=()=>{
    //List of projects so a variable that holds the details of all the projects
    //we need a title, description and image.
    const projects = [
        {
          title: "Telekiosk",
          description: "AI assisted chatbot for diagnosing medical symptoms with a custom built ML model. Built for SIH Hackathon",
          imgUrl: telekiosk,
        },
        {
          title: "AutoMated Facial Attendance",
          description: "Built to solve the problem of Manual attendance marking in college, saving the time of teachers and students.",
          imgUrl: Attendance,
        },
        {
          title: "iNoteBook",
          description: "Note-taking fullstack app with custome login authentication and storage on the cloud.",
          imgUrl: iNoteBook,
        },
        
      ];
      const projects2=[
        {
            title: "Banker's Algorithm Visualiser",
            description: "Visualiser built to help students understand the concept of Deadlock Detection.",
            imgUrl: Deadlock,
          },
          {
            title: "Sorting Visualiser",
            description: "Visualiser to showcase all of the major Sorting algorithms in an interactive and animated way.",
            imgUrl: Sorting,
          },
          {
            title: "Text-Utils",
            description: "React based Text helper app with various funcionalities like word checker, frequency counter, classifier, erase, copy ",
            imgUrl: textutils,
          },
          
      ];
      const projects3=[
        {
            title: "NewsMonkey",
            description: "React based news app built with news API and category definition, infinite loading. ",
            imgUrl: newsmonkey,
          },
          {
            title: "JAVA-Text Based Adventure",
            description: "Java based adventure game built with JAVA swing. Built to demonstrate the functionality of OOPS in JAVA",
            imgUrl: Java_text,
          },
      ];
      return(
        <section className="project" id="project">
            {/* Lets create some responsiveness using bootstrap grid */}
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility partialVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible?"animate__animated animate__rubberBand":""}>

                        <h2>Projects</h2>
                        <p>Some Projects I have built are listed below. Some of these were part of my Web Development BootCamp Journey. Others were part of my college journey when I was developing projects for my Semester porjects.</p>
                        </div>)}
                        </TrackVisibility>
                        {/* Here we add some tabs to switch to different projects
                        EentKey prop helps define which tab is currently Active */}
                        {/* Below is a more customisable way to store not just text in tabs, but muh more content like cards for our projects */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link className="project-link"  eventKey="first" id="tab-first" >Page 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link  className="project-link" eventKey="second" id="tab-second">Page 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="project-link"  eventKey="third" id="tab-third">Page 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                {/* First pane which is displayed when Tab One is clicked:THis will display all the projects in one row. Second and third panes are customizable to suit your needs */}
                                <Tab.Pane eventKey="first">
                                <Row>
                                    {/* Why not use Col to make it responsive? We have used Col in ProjectCard Component, check there */}
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                {
                                            projects2.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <Row>
                                {
                                            projects3.map((project,index)=>{
                                                return(
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" className="bg-img-right" />
        </section>
      );
    
}