import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
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
      console.log(response); // Log the results to console
      setSearchResults(response.data._embedded.events);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <Form>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" onClick={handleSearch}>
          Search
        </Button>
      </Form>
      {/* Display search results */}
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <strong>Name:</strong> {result.name}
            <br />
            <strong>Date:</strong> {result.dates.start.localDate}
            <br />
            <strong>Venues:</strong> {result._embedded.venues[0].name}
            {result.priceRanges && (
              <div>
                <strong>Price Range:</strong> ${result.priceRanges[0].min} - $
                {result.priceRanges[0].max}
              </div>
            )}
            {/* Add more useful data here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
