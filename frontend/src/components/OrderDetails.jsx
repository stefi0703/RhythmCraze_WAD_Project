import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, ListGroup, ListGroupItem, Badge } from "react-bootstrap";

const OrderDetails = () => {
  const { orderId } = useParams(); // Extract orderId from URL
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (orderId) {
      fetchOrderDetails(orderId);
    }
  }, [orderId]);

  const fetchOrderDetails = (orderId) => {
    setLoading(true);
    fetch(`http://localhost:8080/api/orders/${orderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch order details");
        }
        return response.json();
      })
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch order details:", error);
        setError("Failed to fetch order details");
        setLoading(false);
      });
  };

  if (loading) return <p>Loading order details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      {order ? (
        <>
          <h1>Order Details</h1>
          <h2>Order ID: {order.id}</h2>
          <ListGroup>
            {order.lineItems.map((item, index) => (
              <ListGroupItem key={index}>
                <Badge pill bg="info">
                  {item.quantity}
                </Badge>{" "}
                {item.ticketDto.type} tickets at $
                {item.ticketDto.price.toFixed(2)} each
              </ListGroupItem>
            ))}
          </ListGroup>
        </>
      ) : (
        <p>No order details available.</p>
      )}
    </Container>
  );
};

export default OrderDetails;
