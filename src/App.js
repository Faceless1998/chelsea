import { Routes, Route } from "react-router-dom";

import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import Layout from "./navbar/Layout";

function App() {
  return (
    <>
      <Layout />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
