import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImAlarm, ImCart } from "react-icons/im";
import './Nav.css'

function NavBar({ cartCount }) {
  const totalQuantity = cartCount.reduce(
    (acc, item) => acc + item.productQty,
    0
  );

  localStorage.setItem("cartCount", JSON.stringify(cartCount));

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to={"/react-demo-product-2"} className="brand-handwritten">
          Aswin's Cart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/react-demo-product-2"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/react-demo-product-2/contact"}>Contact</Nav.Link>
            <Nav.Link as={Link} to={"/react-demo-product-2/bucketlist"}><ImAlarm /></Nav.Link>
            <Nav.Link
              as={Link}
              to={{
                pathname: "/react-demo-product-2/cart",
              }}
            >
              <ImCart />({totalQuantity})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar