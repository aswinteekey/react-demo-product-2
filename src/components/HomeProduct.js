import React,{useState} from "react";
import {Card,Button,Row} from 'react-bootstrap';
import { productData } from "./Product.dat";
import UserComments from './UserComments'
import {useNavigate} from 'react-router-dom'

function HomeProduct({cartCount,setCartCount}) {
  const[start,upDate]=useState(productData)
  
  
  const addToCart = (eachProduct) => {
    setCartCount((prevCart) => {
      const existingProduct = prevCart.find((item) => item.productId === eachProduct.id);

      if (existingProduct) {
        // If the product is already in the cart, update the quantity
        return prevCart.map((item) =>
          item.productId === eachProduct.id
            ? { ...item, productQty: item.productQty + (eachProduct.qty) }
            : item
        );
      } else {
        // If the product is not in the cart, add it with quantity 
        return [...prevCart, { productId: eachProduct.id, productQty: (eachProduct.qty) }];
      }
    });
  };
  
  const incCount=(prodId)=>{
    const newCount=start.map((eachProd)=>(
      eachProd.id===prodId?{...eachProd,qty:eachProd.qty+1}:eachProd
    ))
    upDate(newCount)
  }

  const decCount=(prodId)=>{
    const newCount=start.map((eachProd)=>(
      eachProd.id===prodId && eachProd.qty > 1?{...eachProd,qty:eachProd.qty-1}:eachProd
    ))
    upDate(newCount)
  }


  const navigate = useNavigate();

  const buyNow = (product) => {
    navigate('/react-demo-product-2/buynow', { state: product });
    
  };

  return (
    <div >
      <h2 className="bg-black text-white p-3 mt-lg-5 mt-5">Our Products</h2>
      <br/>
      <div className='d-flex'>
      <Row xs={1} sm={2} md={3} className="justify-content-center">
      {start.map((eachProduct)=>(
        <Card className='m-3 p-1' style={{ width: "18rem"}} key={eachProduct.id}>
        <Card.Img variant="top" src={require(`./assets/${eachProduct.image}`)} style={{ height: "18rem"}}/>
        <Card.Body>
          <Card.Title>{eachProduct.name}</Card.Title>
          <p className='m-0'>{eachProduct.desc}</p>
          <p className='m-0'> &#8377; {eachProduct.price}</p>
          <p className='m-2'> <Button onClick={()=>decCount(eachProduct.id)}style={{ backgroundColor: "#f0f0f0", borderColor: "#f0f0f0", color: "#333" }}>-</Button> {eachProduct.qty} <Button style={{ backgroundColor: "#f0f0f0", borderColor: "#f0f0f0", color: "#333" }} onClick={()=>incCount(eachProduct.id)}>+</Button></p>
          <Button style={{marginRight: '1em'}}variant="dark" onClick={() => addToCart(eachProduct)}>Add to Cart</Button>
          <Button variant="dark" onClick={() => buyNow(eachProduct)}>Buy Now</Button>
          
        </Card.Body>
      </Card>

      ))}
      </Row>
      </div>
      <UserComments/>
    </div>
  );
}

export default HomeProduct;
