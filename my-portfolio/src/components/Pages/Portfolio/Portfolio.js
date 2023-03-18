import { Card, Button, Container, Row, Col } from "react-bootstrap";
import projects from "./Project";

const ProjectCard = ({ title, image, repoLink, liveLink, description}) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img className="zoom" variant="top" src={image} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">{title}</Card.Title>
        <Card.Text className="cardText">{description}</Card.Text>
        <Button href={repoLink} target="_blank" variant="primary">
          GitHub Repo
        </Button>
        {liveLink && (
          <Button href={liveLink} target="_blank" variant="secondary">
            Live Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <div className="cards">
      <div className="bg-dark text-white py-4">
        <Container>
          <Row className="justify-content-center">
            <h1 className="text-center">Portfolio</h1>
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <Container>
          <Row className="justify-content-center">
            {projects.map((projects, index) => (
              <Col md={4} className="mb-3 mx-auto image-card" key={index}>
                <ProjectCard {...projects} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Projects;