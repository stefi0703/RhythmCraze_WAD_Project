import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const TicketPurchasePage = () => {
  const { concertId } = useParams();
  const [concert, setConcert] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);

  useEffect(() => {
    // Fetch concert details by ID
    fetch(`http://localhost:8080/concerts/${concertId}`)
      .then((response) => response.json())
      .then((data) => setConcert(data));
  }, [concertId]);

  useEffect(() => {
    // Fetch ticket price when concert and ticket type are selected
    if (concert && ticketType) {
      fetch(
        `http://localhost:8080/api/tickets/prices?concertId=${concertId}&ticketType=${ticketType}`
      )
        .then((response) => response.json())
        .then((data) => setTicketPrice(data));
    }
  }, [concert, concertId, ticketType]);

  const handlePurchase = () => {
    // Logic to handle the purchase
    console.log("Purchase:", { concertId, quantity, ticketType, ticketPrice });
  };

  if (!concert) return <p>Loading...</p>;

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>{concert.name}</h1>
        <Form>
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2}>
              Select number of tickets
            </Form.Label>
            <Col sm={10}>
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Select category
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option value="GENERAL">Standard</option>
                <option value="VIP">VIP</option>
                <option value="PREMIUM">Premium</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Button variant="primary" onClick={handlePurchase} className="w-100">
            Add to Cart (${ticketPrice.toFixed(2)})
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TicketPurchasePage;
