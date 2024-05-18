import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Axios from "axios";
import CustomNavbar from "./CustomNavbar";
import ConcertFilter from "./ConcertFilter";
import { useNavigate } from "react-router-dom";

const ConcertList = () => {
  const [concerts, setConcerts] = useState([]);

  const concertsOptions = {
    method: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events?apikey=N5rGnebkF8z6ZSbGAbHXde3WuU51NdBZ",
    params: {
      keyword: "Taylor Swift",
    },
  };
  const navigate = useNavigate();

  const handleBuyTickets = (concertId) => {
    navigate(`/purchase/${concertId}`);
  };

  const handleFilter = async (artist, dates, venues) => {
    try {
      const response = await Axios.get(
        "http://localhost:8080/concerts/filter",
        {
          params: {
            artist,
            dates: dates.join(","), // Join dates array with comma separator
            venues: venues.join(","),
          },
        }
      );
      setConcerts(response.data);
    } catch (error) {
      console.error("Error fetching filtered concerts:", error);
    }
  };

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
        <ConcertFilter onFilter={handleFilter} />
        {concerts.length > 0 ? (
          concerts.map((concert, index) => (
            <Card key={concert.id || index} className="my-3">
              {" "}
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
                    : "No dates available"}
                </Card.Text>
                <Card.Text>Price: ${concert.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleBuyTickets(concert.id)}
                >
                  Buy Tickets
                </Button>
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
