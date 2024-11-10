import React, { useEffect, useState } from "react";
import { productData } from "./Product.dat"; 
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartCount, setCartCount] = useState([]);
  const navigate = useNavigate();

  const orderConfirm = () => {
    alert("Thank you for ordering from us!");
    navigate('/react-demo-product-2');
  };

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem("cartCount"));
    if (savedCart) {
      setCartCount(savedCart);
    }
  }, []);


  const totalQuantity = cartCount.reduce(
    (acc, item) => acc + item.productQty,
    0
  );


  const totalPrice = cartCount.reduce((acc, item) => {
    const product = productData.find(
      (product) => product.id === item.productId
    );
    return acc + (product ? product.price * item.productQty : 0);
  }, 0);


  const deliveryCharge = 89;

  const finalPrice = totalPrice + deliveryCharge;

  return (
    <div>
      <h2 className="bg-black text-white p-3 mt-lg-5 mt-5">Your Cart</h2>
      <Container className="mt-4">
        {cartCount.length === 0 ? (
          <h6>Your cart is empty !</h6>
        ) : (
          <>
            {cartCount.map((item, index) => {
              const product = productData.find(
                (product) => product.id === item.productId
              );
              return product ? (
                <div
                  key={index}
                  style={{
                    marginBottom: "20px",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "10px",
                  }}
                >
                  <h5>
                    {product.name} ({item.productQty} x ₹{product.price}) : ₹
                    {product.price * item.productQty}
                  </h5>
                </div>
              ) : null;
            })}
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
              <h5>Total Amount: ₹{finalPrice}</h5>
              <p>
                ₹{totalPrice} ({totalQuantity} items) + ₹{deliveryCharge} (Delivery charge)
              </p>
              <Button variant="dark" onClick={orderConfirm} className="w-100 mb-5">
                Pay Now
              </Button>
            </Form>
          </>
        )}
      </Container>
    </div>
  );
}

export default Cart;
