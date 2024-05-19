import "./App.css";
import { useState } from "react";
import IMG from "./assets/Main_Website_Badge_-_Colour.webp"
function App() {
const [isLatestOpen, setIsLatestOpen] = useState(false)
const [isWatchOpen, setIsWatchOpen] = useState(false)

const toggleDropdownLatest = () => {
  setIsLatestOpen(!isLatestOpen);
}

const toggleWathDropdown = () => {
  setIsWatchOpen(!isWatchOpen);
}
  return (
    <>
      <div className="App">
          <nav className="navbar">
            <ul className="menu">
                <li className="menu-item">
                  <a href="#" className="menu-link"> 
                  <img src={IMG} alt="chelsea" style={{width:"115px"}} />
                   </a>
                </li>

                <li className="menu-item" onClick={toggleDropdownLatest}>
                <a href="#" className="menu-link"> latest </a>
                
                </li>

                <li className="menu-item">
                  <a href="#" className="menu-link"> Watch </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link"> Man's Team </a>
                </li>

                <li className="menu-item">
                  <a href="#" className="menu-link"> Woman's Team </a>
                </li>

                <li className="menu-item">
                  <a href="#" className="menu-link"> Tickets & Hospitality </a>
                </li>

                <li className="menu-item">
                  <a href="#" className="menu-link"> Shop </a>
                </li>
            </ul>
          </nav>

          {isLatestOpen && (
            <ul className="dropdown-menu">
                    <li><a className="dropdown-link" href="#">News</a></li>
                    <li><a className="dropdown-link" href="#">Interviews & Features</a></li>
                    <li><a className="dropdown-link" href="#">USA Tour 2024</a></li>
                    <li><a className="dropdown-link" href="#">Win LJ's Signed Boots!</a></li>
            </ul>
          )}
                
      </div>
    </>
  );
}

export default App;
