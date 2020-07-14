import React from "react";
import {
  BrowseRouter,
  Routes,
  Route,
  Link,
  Router,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header.js";
import { Product } from "./components/Product.js";
import { Home } from "./components/Home.js";
import { Notfound } from "./components/Notfound";
import { Productdetails } from "./components/Productdetails";
import { ProductIndex } from "./components/ProductIndex";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />}>
          <Route path="/" element={<ProductIndex />} />
          <Route path=":Key" element={<Productdetails />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
