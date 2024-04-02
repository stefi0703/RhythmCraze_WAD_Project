import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="bg-dark text-light py-5">
        <Container>
          <Row>
            <Col>
              <h1>Welcome to TicketMaster</h1>
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
            {/* Add your popular events components here */}
          </Col>
        </Row>
      </Container>
      {/* You can add more sections as needed */}
    </div>
  );
};

export default Home;
