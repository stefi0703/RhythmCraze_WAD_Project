// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// const ConcertFilter = ({ onFilter }) => {
//   const [artist, setArtist] = useState("");
//   const [dates, setDates] = useState([]);
//   const [venues, setVenues] = useState([]);

//   const handleFilter = () => {
//     // Call the onFilter function passed from the parent component
//     onFilter(artist, dates, venues);
//   };

//   return (
//     <Form>
//       <Form.Group controlId="artist">
//         <Form.Label>Artist</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter artist name"
//           value={artist}
//           onChange={(e) => setArtist(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group controlId="dates">
//         <Form.Label>Dates</Form.Label>
//         <Form.Control
//           type="date"
//           multiple
//           value={dates}
//           onChange={(e) =>
//             setDates(
//               Array.from(e.target.selectedOptions, (option) => option.value)
//             )
//           }
//         />
//       </Form.Group>
//       <Form.Group controlId="venues">
//         <Form.Label>Venues</Form.Label>
//         <Form.Control
//           as="select"
//           multiple
//           value={venues}
//           onChange={(e) =>
//             setVenues(
//               Array.from(e.target.selectedOptions, (option) => option.value)
//             )
//           }
//         >
//           {/* Add options for venues */}
//           <option value="Venue 1">Venue 1</option>
//           <option value="Venue 2">Venue 2</option>
//           <option value="Venue 3">Venue 3</option>
//         </Form.Control>
//       </Form.Group>
//       <Button variant="primary" onClick={handleFilter}>
//         Filter
//       </Button>
//     </Form>
//   );
// };

// export default ConcertFilter;

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
    const formattedDates = dates.map(
      (date) => new Date(date).toISOString().split("T")[0]
    );
    onFilter(artist, formattedDates, venues);
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
          multiple
          value={dates}
          onChange={(e) =>
            setDates(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
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
      <Button variant="primary" onClick={handleFilter}>
        Filter
      </Button>
    </Form>
  );
};

export default ConcertFilter;
