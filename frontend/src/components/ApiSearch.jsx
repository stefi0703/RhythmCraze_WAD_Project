// import React, { useState } from "react";
// import { Form, FormControl, Button, Row, Col } from "react-bootstrap"; // Import Row and Col
// import axios from "axios";

// const SearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     try {
//       const response = await axios.get(
//         "https://app.ticketmaster.com/discovery/v2/events.json",
//         {
//           params: {
//             keyword: searchTerm,
//             apikey: "N5rGnebkF8z6ZSbGAbHXde3WuU51NdBZ",
//           },
//         }
//       );
//       console.log(response); // Log the results to console
//       setSearchResults(response.data._embedded.events);
//     } catch (error) {
//       console.error("Error searching:", error);
//     }
//   };

//   return (
//     <div>
//       <Form className="d-flex">
//         <Form.Control
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//       {/* Display search results */}
//       <ul>
//         {searchResults.map((result, index) => (
//           <li key={index}>
//             <strong>Name:</strong> {result.name}
//             <br />
//             <strong>Date:</strong> {result.dates.start.localDate}
//             <br />
//             <strong>Venues:</strong> {result._embedded.venues[0].name}
//             {result.priceRanges && (
//               <div>
//                 <strong>Price Range:</strong> ${result.priceRanges[0].min} - $
//                 {result.priceRanges[0].max}
//               </div>
//             )}
//             {/* Add more useful data here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchComponent;

// ApiSearch.js
import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";

const ApiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Navigate to the search results page with search term as URL parameter
      navigate(`/search-results/${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSearch}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default ApiSearch;
