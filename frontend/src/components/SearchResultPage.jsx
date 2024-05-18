import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Button } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import { useParams } from "react-router-dom"; // Import useParams hook

const SearchResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const { term } = useParams(); // Use useParams hook to access route parameters
  const searchTerm = decodeURIComponent(term); // Decode the search term

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          "https://app.ticketmaster.com/discovery/v2/events.json",
          {
            params: {
              keyword: searchTerm,
              apikey: "N5rGnebkF8z6ZSbGAbHXde3WuU51NdBZ",
            },
          }
        );
        const searchResults = response.data._embedded.events;
        setSearchResults(searchResults);
        console.log(searchResults);
        // console.log(searchResults._embedded.venues.name);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]); // Fetch search results when searchTerm changes

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>Search Results for "{searchTerm}"</h1>
        <div className="d-flex flex-wrap justify-content-between">
          {searchResults.map((result, index) => (
            <Card key={index} className="my-3" style={{ width: "30%" }}>
              <Card.Body>
                <Card.Title>{result.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Date: {result.dates.start.localDate}
                </Card.Subtitle>
                <Card.Text>
                  Venues:{" "}
                  {result._embedded &&
                  result._embedded.venues &&
                  result._embedded.venues.length > 0
                    ? result._embedded.venues[0].name
                    : "Venue not available"}
                </Card.Text>
                {result.priceRanges && (
                  <Card.Text>
                    Price Range: ${result.priceRanges[0].min} - $
                    {result.priceRanges[0].max}
                  </Card.Text>
                )}
                <Card.Text>
                  {result.classifications &&
                    result.classifications[0].segment.name}
                </Card.Text>
                <Button variant="primary">Buy Tickets</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
};

export default SearchResultPage;
