import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/concerts");
        setConcerts(response.data);
      } catch (error) {
        console.error("Error fetching concerts:", error);
      }
    };

    fetchConcerts();
  }, []);
  console.log(concerts); // Log the value of concerts state

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Concerts</h1>
        {concerts.length > 0 ? (
          concerts.map((concert) => (
            <Card key={concert.id} className="my-3">
              <Card.Body>
                <Card.Title>{concert.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {concert.artist}
                </Card.Subtitle>
                <Card.Text>Venue: {concert.venue}</Card.Text>
                <Card.Text>Date: {concert.date}</Card.Text>
                <Card.Text>Price: ${concert.price}</Card.Text>
                {/* Additional properties if present */}
                {/* <Card.Text>SomeProperty: {concert.someProperty}</Card.Text> */}
                <Button variant="primary">Buy Tickets</Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No concerts available</p>
        )}
      </Container>
    </>
  );
};

export default ConcertList;
