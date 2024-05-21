import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";
import heartIcon from "./heart_icon.png";
import './VenueList.css';

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const [venueFavorites, setVenueFavorites] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/venues");
        setVenues(response.data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("venueFavorites")) || [];
    setVenueFavorites(savedFavorites);
  }, []);

  const handleFavorite = (venue) => {
    const exists = venueFavorites.some(fav => fav.name === venue.name);
    if (!exists) {
      const updatedFavorites = [...venueFavorites, venue];
      setVenueFavorites(updatedFavorites);
      localStorage.setItem("venueFavorites", JSON.stringify(updatedFavorites));
      alert("Venue added to favorites");
    } else {
      alert("Venue is already in favorites");
    }
  };

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Venues</h1>
        {venues.length > 0 ? (
          venues.map((venue) => (
            <Card key={venue.id} className="my-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>{venue.name}</Card.Title>
                    <Card.Text>Location: {venue.location}</Card.Text>
                    <Card.Text>
                      Concerts:{" "}
                      {venue.concertsNames
                        ? venue.concertsNames.join(", ")
                        : "No concerts"}
                    </Card.Text>
                  </Col>
                  <Col className="text-end">
                    <div className="favorite-container">
                      <Button variant="link" onClick={() => handleFavorite(venue)}>
                        <img
                          src={heartIcon}
                          alt="Favorite"
                          className="heart-icon"
                        />
                      </Button>
                      <div className="favorite-text">Add to favorite</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No venues available</p>
        )}
      </Container>
    </>
  );
};

export default VenueList;
