import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

const ConcertFilter = ({ onFilter }) => {
  const [artist, setArtist] = useState("");
  const [dates, setDates] = useState([]);
  const [venues, setVenues] = useState([]);
  const [allVenues, setAllVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await Axios.get("http://localhost:8080/venues");
        setAllVenues(response.data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  const handleFilter = () => {
    onFilter(artist, dates, venues);
  };

  return (
    <Form>
      <Form.Group controlId="artist">
        <Form.Label>Artist</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter artist name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="dates">
        <Form.Label>Dates</Form.Label>
        <Form.Control
          type="date"
          name="datepic"
          placeholder="DateRange"
          value={dates}
          onChange={(e) => {
            const selectedDates = Array.isArray(e.target.value)
              ? e.target.value
              : [e.target.value];
            setDates(selectedDates);
          }}
        />
      </Form.Group>

      <Form.Group controlId="venues">
        <Form.Label>Venues</Form.Label>
        <Form.Control
          as="select"
          multiple
          value={venues}
          onChange={(e) =>
            setVenues(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {/* Render options only if allVenues is an array */}
          {Array.isArray(allVenues) &&
            allVenues.map((venue) => (
              <option key={venue.id} value={venue.name}>
                {venue.name}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" onClick={handleFilter} style={{ backgroundColor: "black", color: "#FAFAED", borderColor: "black", marginTop: "5px" }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#FAFAED";
          e.target.style.color = "black";
          e.target.style.borderColor = "#FAFAED";
          e.target.style.boxShadow = "0 4px 4px rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "#FAFAED";
          e.target.style.boxShadow = "none";
        }}>
        Filter
      </Button>
    </Form>
  );
};

export default ConcertFilter;
