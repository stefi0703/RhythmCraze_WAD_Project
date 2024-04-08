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
                  {concert.artist ? `Artist: ${concert.artist.name}` : ""}
                </Card.Subtitle>
                <Card.Text>
                  Venues:{" "}
                  {concert.venues
                    ? concert.venues.map((venue) => venue.name).join(", ")
                    : ""}
                </Card.Text>
                <Card.Text>
                  Dates:{" "}
                  {concert.dates
                    ? concert.dates
                        .map((date) => new Date(date).toLocaleDateString())
                        .join(", ")
                    : ""}
                </Card.Text>
                <Card.Text>Price starting from: ${concert.price}</Card.Text>
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
