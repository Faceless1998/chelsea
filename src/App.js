import { Routes, Route } from "react-router-dom";
import "./app.css"
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Product } from "./components/product/Product";
import ProductDetails from "./components/product/ProductDetails";

import Layout from "./navbar/Layout";

function App() {
  return (
    <>
      <Layout />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={ <Product /> } />
        <Route path="/product/:id" element={ < ProductDetails /> } />

      </Routes>
    </>
  );
}

export default App;
