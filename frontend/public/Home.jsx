// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import CustomNavbar from "./CustomNavbar";

// const Home = () => {
//   return (
//     <div>
//       <CustomNavbar />
//       <div className="bg-dark text-light py-5">
//         <Container>
//           <Row>
//             <Col>
//               <h1>Welcome to RhythmCraze!</h1>
//               <p>
//                 Find and book tickets for concerts, sports events, theater
//                 shows, and more!
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Container>
//         <Row>
//           <Col>
//             <h2>Popular Events</h2>

//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import Carousel from 'react-bootstrap/Carousel';

const UncontrolledExample = () => {
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
    borderRadius: '50%',
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
    borderRadius: '50%',
    zIndex: 1,
  };

  return (
    <Carousel
      prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={carouselControlPrevStyle} />}
      nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={carouselControlNextStyle} />}
    >
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor3.jpeg"
        // alt="First slide"
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
        />
        <Carousel.Caption>
          <h3>The Eras Tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const UncontrolledExample2 = () => {
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
    borderRadius: '50%',
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
    borderRadius: '50%',
    zIndex: 1,
  };

  return (
    <Carousel
      prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" style={carouselControlPrevStyle} />}
      nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" style={carouselControlNextStyle} />}
    >
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor3.jpeg"
        // alt="First slide"
        />
        <Carousel.Caption>
          <h3>Love on tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor5.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Love on tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imageStyle}
          src="/taylor2.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Love on tour</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to RhythmCraze!</h1>
              <p>
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
            <p>  </p>
          </Col>
        </Row>
      </Container>
      {/* You can add more sections as needed */}
    </div>
  );
};

export default Home;
