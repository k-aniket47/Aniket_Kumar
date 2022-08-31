import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project5.png";
import projImg4 from "../assets/img/project3.png";
import projImg5 from "../assets/img/project4.png";
import projImg6 from "../assets/img/project6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "LeefSeak",
      description: "ML-based identification of medicinal plants using Deep Learning Model and Deployed into fully functional web-app using Flask Framework.",
      imgUrl: proj1,
      link:"https://github.com/k-aniket47/Medicinal-Plant-Identification",
    },
    {
      title: "Anti-Social",
      description: "Social Media Web-App made using Node-js and MongoDB is a full-fledged app allowing users to post blogs, Interacting with their friends and many more.",
      imgUrl: projImg2,
      link:"https://github.com/k-aniket47/Anti-Social",
    },
    {
      title: "Trailer-troop",
      description: "React based Entertainment App Featuring All the Movies/Web series using Moviedb API Giving all the information of Movies/Web series rating and redirect the user to the trailer of that Movie. ",
      imgUrl: projImg3,
      link:"https://github.com/k-aniket47/Trailer-Troop",
    },
    {
      title: "Apartment Management System",
      description: "(Database Management System Project using MySQL and PHP) to manage all the apartments and store all the data, such as check-in and check-out dates and times, Repair activities, vacancies and many more.",
      imgUrl: projImg4,
      link:"https://github.com/k-aniket47/Apartment-Management-System",
    },
    {
      title: "Contact-DB",
      description: "A Contact Manage made using MongoDb and Node-JS",
      imgUrl: projImg5,
      link:"https://github.com/k-aniket47/Contact-Management-Using-MongoDb-Database",
    },
    {
      title: "PodCast",
      description: "A simple Podcast Website Using Django",
      imgUrl: projImg6,
      link:"https://github.com/k-aniket47/Medicinal-Plant-Identification",
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
