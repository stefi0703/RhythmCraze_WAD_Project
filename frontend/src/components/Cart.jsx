import React, { useState, useEffect } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ticketTypes, setTicketTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      console.log("No token found");
      return;
    }

    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      const decodedToken = JSON.parse(jsonPayload);
      const username = decodedToken.sub;
      fetchCartItems(username);
      fetchTicketTypes();
    } catch (error) {
      console.error("Failed to decode JWT:", error);
    }
  }, []);

  const fetchCartItems = (username) => {
    setLoading(true);
    fetch(`http://localhost:8080/api/orders/user/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }
        return response.json();
      })
      .then((data) => {
        setCartItems(data[0].lineItems); // Access lineItems
        console.log("Cart items:", data[0].lineItems);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch cart items:", error);
        setError("Failed to fetch cart items");
        setLoading(false);
      });
  };

  const fetchTicketTypes = () => {
    fetch("http://localhost:8080/api/tickets/types")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch ticket types");
        }
        return response.json();
      })
      .then((data) => {
        setTicketTypes(data);
        setSelectedType(data[0]); // Select the first type by default
      })
      .catch((error) => {
        console.error("Failed to fetch ticket types:", error);
        setError("Failed to fetch ticket types");
      });
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    updateTicketPrice(event.target.value);
  };

  const updateTicketPrice = async (type) => {
    try {
      const ticketId = cartItems[0].ticketDto.id;
      // Make a PUT request to update the ticket price based on its type
      const response = await fetch(
        `http://localhost:8080/api/tickets/${cartItems[0].ticketDto.id}/${type}/updatePriceByType`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error("Failed to update ticket price");
      }
      console.log("Ticket price updated successfully");

      // Extract the new price from the response
      const { price } = await response.json();

      // After updating the ticket price in the database, update the cartItems state
      const updatedCartItems = cartItems.map((item) => {
        if (item.ticketDto.id === ticketId) {
          return {
            ...item,
            ticketDto: {
              ...item.ticketDto,
              price: parseFloat(price), // Convert to number if necessary
            },
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Failed to update ticket price:", error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.ticketDto.price,
      0
    );
  };

  if (loading) return <p>Loading cart items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Cart</h1>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: "20px" }}>
                <Card.Body>
                  <h4>{item.ticketDto.name}</h4>
                  <Form.Group controlId={`type-${index}`}>
                    <Form.Label>Type:</Form.Label>
                    <Form.Select
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      {ticketTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                  <p>Price: ${item.ticketDto.price.toFixed(2)}</p>
                  <Form.Group controlId={`quantity-${index}`}>
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                    />
                  </Form.Group>
                  <p>
                    Total Price: $
                    {(item.quantity * item.ticketDto.price).toFixed(2)}
                  </p>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteItem(index)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
            <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
            <Button variant="primary">Checkout</Button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Container>
    </>
  );
};

export default Cart;
