// import React from "react";
// import {
//   Button,
//   Container,
//   Form,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";
// import ApiSearch from "./ApiSearch";
// const CustomNavbar = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("jwtToken"); // Clear the authentication token
//     window.location.href = "/login"; // Redirect to the login page after logout
//   };

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="/">Home</Nav.Link>
//             <NavDropdown title="Features" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="/concerts">Concerts</NavDropdown.Item>
//               <NavDropdown.Item href="/artists">Artists</NavDropdown.Item>
//               <NavDropdown.Item href="/venues">Venues</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="/about">About</Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/login">Login</Nav.Link>
//             <Nav.Link href="/register">Register</Nav.Link>
//             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>{" "}
//             <Nav.Link href="/account">My account</Nav.Link>
//             {/* Add onClick handler for logout */}
//           </Nav>
//           <ApiSearch />
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;

import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ApiSearch from "./ApiSearch";

const CustomNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Clear the authentication token
    window.location.href = "/login"; // Redirect to the login page after logout
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#FAFAED" }}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Features" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/concerts">Concerts</NavDropdown.Item>
              <NavDropdown.Item href="/artists">Artists</NavDropdown.Item>
              <NavDropdown.Item href="/venues">Venues</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            <Nav.Link href="/account">My account</Nav.Link>
          </Nav>
          <ApiSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
