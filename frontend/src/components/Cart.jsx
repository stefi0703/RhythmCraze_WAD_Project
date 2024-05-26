import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleQuantityChange = (index, quantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = quantity;
    setCartItems(updatedCartItems);
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
              <div key={index} style={{ marginBottom: "20px" }}>
                <h4>{item.ticketDto.name}</h4>
                <p>Type: {item.ticketDto.type}</p>
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
              </div>
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
