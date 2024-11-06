import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeProduct from "./HomeProduct";
import NotFount from "./NotFount";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Cart from "./Cart";

const RouterPage = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/react-demo-product-2" element={<HomeProduct />}></Route>
        <Route
          path="/react-demo-product-2/contact"
          element={<Contact />}
        ></Route>
        <Route
          path="/react-demo-product-2/cart"
          element={<Cart />}
        ></Route>
        <Route path="*" element={<NotFount />}></Route>
      </Routes>
    </div>
  );
};

export default RouterPage;
