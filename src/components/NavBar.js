import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({cartCount}) {
  const totalQuantity = cartCount.reduce((acc, item) => acc + item.productQty, 0);
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark"  fixed="top">
        <Container>
          <Navbar.Brand as={Link} to={"/react-demo-product-2"}>
            Aswin's Cart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/react-demo-product-2"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/react-demo-product-2/contact"}>
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to={""}>
                Cart({totalQuantity})
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
