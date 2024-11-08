import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom";

function BuyNow() {
    
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const orderConfirm=()=>{
    alert("Thank you for ordering from us !");
    navigate('/react-demo-product-2');
  }

  return (
    <Container className="mt-4">
      <h2>Checkout Form</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your address"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="Enter your mobile number" />
        </Form.Group>
        <h5>Totel Amout : {(product.price*product.qty)+89}</h5>
        <p>{product.qty} x {product.price} + 89 ( Delivery charge )</p>
        <Button variant="dark" onClick={orderConfirm} className="w-100">
          Pay Now
        </Button>
      </Form>
    </Container>
  );
}

export default BuyNow;
