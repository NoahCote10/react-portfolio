import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src="./images/noah-avatar.PNG" alt="noah-avatar" className="img-fluid avatar" />
      <Container className="welcome">
        <Row>
          <Col>
            <div className="my-5">
              <h1 className="text-center">About Me</h1>
              <p className="lead bio">
                Hey! I'm Noah, and I'm a coding student currently
                attending the UNH coding bootcamp. Over the past six months,
                I've been immersed in various coding languages and frameworks,
                and I've gained valuable skills and experience that have helped
                me grow as a developer. I have four years of professional
                experience as a{" "}
                <a href="https://www.musictherapy.org/about/musictherapy/">
                  music therapist
                </a>{" "}
                With my dedication and hard work, I'm confident that I have what
                it takes to succeed in the tech industry and become a skilled
                and talented developer.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
