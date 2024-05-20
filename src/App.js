import { useState } from "react";
import "./App.css";
import Carousel from "./Carousel";

function App() {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isAwayOpen, setIsAwayOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);

  const handleHomeOpen = () => {
    setIsHomeOpen(true);
    setIsAwayOpen(false);
    setIsThirdOpen(false);
  };

  const handleAwayOpen = () => {
    setIsHomeOpen(false);
    setIsAwayOpen(true);
    setIsThirdOpen(false);
  };

  const handleThirdOpen = () => {
    setIsHomeOpen(false);
    setIsAwayOpen(false);
    setIsThirdOpen(true);
  };

  return (
    <>
      <h1 className="title">Create your own</h1>
      <div className="tab">
        <div
          className={`item ${isHomeOpen ? "active" : ""}`}
          onClick={handleHomeOpen}
        >
          Home
        </div>
        <div
          className={`item ${isAwayOpen ? "active" : ""}`}
          onClick={handleAwayOpen}
        >
          Away
        </div>
        <div
          className={`item ${isThirdOpen ? "active" : ""}`}
          onClick={handleThirdOpen}
        >
          Third
        </div>
      </div>

      <div className="inside-card">
        <div className="card">
          {isHomeOpen && <>
            <Carousel />
          </>}
          {isAwayOpen && <></>}
          {isThirdOpen && <></>}
        </div>
      </div>
    </>
  );
}

export default App;
