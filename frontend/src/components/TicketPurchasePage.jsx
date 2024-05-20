import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import LoginModal from "./LoginModal"; // Assuming this is a modal for confirming the purchase

const TicketPurchasePage = () => {
  const { concertId } = useParams();
  const [concert, setConcert] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch concert details by ID
    fetch(`http://localhost:8080/concerts/${concertId}`)
      .then((response) => response.json())
      .then((data) => setConcert(data))
      .catch((error) =>
        console.error("Error fetching concert details:", error)
      );
  }, [concertId]);

  // useEffect(() => {
  //   if (concert && ticketType) {
  //     setIsLoading(true);
  //     fetch(
  //       `http://localhost:8080/api/tickets/prices?concertId=${concertId}&ticketType=${ticketType}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Ticket price data:", data); // Log to check what's being received
  //         if (typeof data === "number") {
  //           setTicketPrice(data);
  //         } else {
  //           console.error("Invalid ticket price data:", data);
  //           setTicketPrice(0); // Set a default or error state as appropriate
  //         }
  //         setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching ticket prices:", error);
  //         setIsLoading(false);
  //       });
  //   }
  // }, [concert, concertId, ticketType]);

  const handlePurchase = () => {
    if (!ticketType || quantity <= 0) {
      alert("Please select ticket type and quantity.");
      return;
    }

    setIsLoading(true);
    fetch(
      `http://localhost:8080/api/tickets/create?concertId=${concertId}&ticketType=${ticketType}&quantity=${quantity}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to create ticket");
        return response.json();
      })
      .then((orderLineItem) => {
        console.log("Order Line Item created:", orderLineItem);
        setModalShow(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error during ticket purchase:", error);
        alert("Error during ticket purchase: " + error.message);
        setIsLoading(false);
      });
  };

  const formattedPrice = (price) => {
    return typeof price === "number" ? price.toFixed(2) : "0.00";
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
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={handlePurchase}
              disabled={isLoading}
              className="custom-buy-button"
            >
              {isLoading ? "Processing..." : `Buy `}
            </Button>
          </div>
        </Form>
      </Container>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
      <style>
        {`
                .custom-buy-button {
                    background-color: black;
                    color: #FAFAED;
                    border-color: black;
                    width: 150px;
                }
                `}
      </style>
    </>
  );
};

export default TicketPurchasePage;
