import { Routes, Route } from "react-router-dom";
import "./app.css"
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Product } from "./components/product/Product";
import ProductDetails from "./components/product/ProductDetails";
import Register from "./components/register/Register";
import Layout from "./navbar/Layout";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={ <Product /> } />
        <Route path="/product/:id" element={ < ProductDetails /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
