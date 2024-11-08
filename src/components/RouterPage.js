import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import HomeProduct from "./HomeProduct";
import NotFount from "./NotFount";
import Contact from "./Contact";
import NavBar from "./NavBar";
import BuyNow from "./BuyNow";

const RouterPage = () => {
  
  const[cartCount,setCartCount]=useState([])

  return (
    <div>
      <NavBar cartCount={cartCount}/>

      <Routes>
        <Route path="/react-demo-product-2" element={<HomeProduct cartCount={cartCount} setCartCount={setCartCount}/>}></Route>
        <Route
          path="/react-demo-product-2/contact"
          element={<Contact />}
        ></Route>
        <Route
          path="/react-demo-product-2/buynow"
          element={<BuyNow />}
        ></Route>
        <Route path="*" element={<NotFount />}></Route>
      </Routes>
    </div>
  );
};

export default RouterPage;
