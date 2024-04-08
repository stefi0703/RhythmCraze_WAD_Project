import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";

const VenueList = () => {
  const [venues, setVenues] = useState([]);

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

  console.log(venues); // Log the value of venues state

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Venues</h1>
        {venues.length > 0 ? (
          venues.map((venue) => (
            <Card key={venue.id} className="my-3">
              <Card.Body>
                <Card.Title>{venue.name}</Card.Title>
                <Card.Text>Location: {venue.location}</Card.Text>
                <Card.Text>
                  Concerts:{" "}
                  {venue.concertsNames
                    ? venue.concertsNames.join(", ")
                    : "No concerts"}
                </Card.Text>
                {/* Additional properties if present */}
                {/* <Card.Text>SomeProperty: {venue.someProperty}</Card.Text> */}
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
