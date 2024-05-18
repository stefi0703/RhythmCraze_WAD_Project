// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Form, Button, Row, Col } from "react-bootstrap";
// import CustomNavbar from "./CustomNavbar";
// import LoginModal from "./LoginModal"; // Import the LoginModal component

// const TicketPurchasePage = () => {
//   const { concertId } = useParams();
//   const [concert, setConcert] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [ticketType, setTicketType] = useState("");
//   const [modalShow, setModalShow] = useState(false); // State for managing modal visibility

//   useEffect(() => {
//     // Fetch concert details by ID
//     fetch(`http://localhost:8080/concerts/${concertId}`)
//       .then((response) => response.json())
//       .then((data) => setConcert(data));
//   }, [concertId]);

//   const handlePurchase = () => {
//     // Logic to handle the purchase
//     console.log("Purchase:", { concertId, quantity, ticketType });
//     setModalShow(true); // Show the modal
//   };

//   if (!concert) return <p>Loading...</p>;

//   return (
//     <>
//       <CustomNavbar />
//       <Container>
//         <h1>{concert.name}</h1>
//         <Form>
//           <Form.Group as={Row} className="mb-3 align-items-center">
//             <Form.Label column sm={2}>
//               Select number of tickets
//             </Form.Label>
//             <Col sm={10}>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//               >
//                 -
//               </Button>
//               <span className="mx-3">{quantity}</span>
//               <Button
//                 variant="outline-primary"
//                 onClick={() => setQuantity(quantity + 1)}
//               >
//                 +
//               </Button>
//             </Col>
//           </Form.Group>
//           <Form.Group as={Row} className="mb-3">
//             <Form.Label column sm={2}>
//               Select category
//             </Form.Label>
//             <Col sm={10}>
//               <Form.Select
//                 value={ticketType}
//                 onChange={(e) => setTicketType(e.target.value)}
//               >
//                 <option value="Standard">Standard - $50</option>
//                 <option value="VIP">VIP - $75</option>
//                 <option value="Premium">Premium - $100</option>
//               </Form.Select>
//             </Col>
//           </Form.Group>
//           <div className="d-flex justify-content-center">
//             <Button
//               variant="primary"
//               onClick={handlePurchase}
//               className="custom-buy-button"
//             >
//               Buy
//             </Button>
//           </div>
//         </Form>
//       </Container>
//       <LoginModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//       <style>
//         {`
//           .custom-buy-button {
//             background-color: black;
//             color: #FAFAED;
//             border-color: black;
//             width: 150px;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default TicketPurchasePage;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import LoginModal from "./LoginModal"; // Import the LoginModal component

const TicketPurchasePage = () => {
  const { concertId } = useParams();
  const [concert, setConcert] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [modalShow, setModalShow] = useState(false); // State for managing modal visibility

  useEffect(() => {
    // Fetch concert details by ID
    fetch(`http://localhost:8080/concerts/${concertId}`)
      .then((response) => response.json())
      .then((data) => setConcert(data));
  }, [concertId]);

  const handlePurchase = () => {
    // Logic to handle the purchase
    console.log("Purchase:", { concertId, quantity, ticketType });
    setModalShow(true); // Show the modal
  };

  if (!concert) return <p>Loading...</p>;

  return (
    <>
      <CustomNavbar />
      <Container>
        <h1>{concert.name}</h1>
        <Form>
          <Form.Group as={Row} className="mb-3 align-items-center">
            <Form.Label column sm={2}>
              Select number of tickets
            </Form.Label>
            <Col sm={10}>
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="mx-3">{quantity}</span>
              <Button
                variant="outline-primary"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Select category
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                value={ticketType}
                onChange={(e) => setTicketType(e.target.value)}
              >
                <option value="Standard">Standard - $50</option>
                <option value="VIP">VIP - $75</option>
                <option value="Premium">Premium - $100</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={handlePurchase}
              className="custom-buy-button"
            >
              Buy
            </Button>
          </div>
        </Form>
      </Container>
      <LoginModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <style>
        {`
          .custom-buy-button {
            background-color: black;
            color: #FAFAED;
            border-color: black;
            width: 150px;
          }
        `}
      </style>
    </>
  );
};

export default TicketPurchasePage;

