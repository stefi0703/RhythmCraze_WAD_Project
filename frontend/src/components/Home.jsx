import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const UncontrolledExample = () => {

  const carouselRef = useRef(null);

  const imageStyle = {
    maxHeight: '500px',
    objectFit: 'contain',
    width: '100%'
  };

  const carouselControlPrevStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    width: '30px',
    height: '30px',
    backgroundColor: 'black',
    borderRadius: '30%',
    zIndex: 1,
  };

  const carouselControlNextStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '30px',
    height: '30px',
    backgroundColor: 'black',
    borderRadius: '30%',
    zIndex: 1,
  };

  const handleImageClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };



  return (
    <Carousel ref={carouselRef}
      prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={carouselControlPrevStyle} />}
      nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={carouselControlNextStyle} />}
    >
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor3.jpeg"
          // alt="First slide"
          onClick={handleImageClick}
        />
        <Carousel.Caption>
          <h3>The Eras Tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor5.jpeg"
          alt="Second slide"
          onClick={handleImageClick}
        />
        <Carousel.Caption>
          <h3>The Eras Tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor2.jpeg"
          alt="Third slide"
          onClick={handleImageClick}
        />
        <Carousel.Caption>
          <h3>The Eras Tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const UncontrolledExample2 = () => {

  const carouselRef = useRef(null);

  const imageStyle = {
    maxHeight: '500px',
    objectFit: 'contain',
    width: '100%'
  };

  const carouselControlPrevStyle = {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    width: '30px',
    height: '30px',
    backgroundColor: 'black',
    borderRadius: '30%',
    zIndex: 1,
  };

  const carouselControlNextStyle = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    width: '30px',
    height: '30px',
    backgroundColor: 'black',
    borderRadius: '30%',
    zIndex: 1,
  };

  const handleImageClick = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Carousel ref={carouselRef}
      prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={carouselControlPrevStyle} />}
      nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={carouselControlNextStyle} />}
    >
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/tw1.jpeg"
          onClick={handleImageClick}
        // alt="First slide"
        />
        <Carousel.Caption>
          <h3>After Hours Dawn</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/tw2.jpeg"
          alt="Second slide"
          onClick={handleImageClick}
        />
        <Carousel.Caption>
          <h3>After Hours Dawn</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/tw3.jpeg"
          alt="Third slide"
          onClick={handleImageClick}
        />
        <Carousel.Caption>
          <h3>After Hours Dawn</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => {
  const navigate = useNavigate(); // useNavigate hook from react-router-dom

  const handleSearchRedirect = () => {
    navigate('/search-results/the%20eras%20tour');
  };
  return (
    <div>
      <CustomNavbar />
      <div className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col>
              <h1 style={{ color: "#FAFAED" }}>Welcome to RhythmCraze!</h1>
              <p style={{ color: "#FAFAED" }}>
                Find and book tickets for concerts, sports events, theater
                shows, and more!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <h2>Popular Events</h2>
            <UncontrolledExample />
            <div className="d-flex justify-content-center mt-3">
              <Button variant="secondary" onClick={handleSearchRedirect}>
                View The Eras Tour Events
              </Button>
            </div>
            <p>  </p>
            <UncontrolledExample2 />
            <div className="d-flex justify-content-center mt-3">
              <Button variant="secondary" >
                Tickets available soon!
              </Button>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
      <Footer />
      {/* You can add more sections as needed */}
    </div>
  );
};

export default Home;
