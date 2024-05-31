import { useState } from "react";
import "./App.css";
import Carousel from "./Carousel";
import IMG1 from "./assets/photo1.webp";
import IMG2 from "./assets/photo2.webp";
import IMG3 from "./assets/photo3.webp";
import IMG4 from "./assets/photo4.webp";
import NewTitle from "./NewTitle";
import KitTitles from "./KitTitles";
import Biblusi from "./biblusi/Biblusi";


const kits = [
  {
    name: "Home",
    color: "white",
    images: [IMG1, IMG2, IMG3, IMG4],
    sizes: {
      XS: false,
      S: true,
      M: false,
      L: false,
      XL: false,
      "2XL": false,
      "3XL": false,
    },
    price:125,
    badge:{
      badge1: "None",
      badge2: "Champions League Pack +$25.00",
      badge3: "La Liga +$15.00"
    },
    NameNumber:{
      name1:"None",
      name2:"Select Player +$25.00",
      name3:"Personalize +$25.00"
    }
  },
  {
    name: "Away",
    color: "navy",
    images: [IMG2, IMG1, IMG3, IMG4],
    sizes: {
      XS: false,
      S: true,
      M: true,
      L: false,
      XL: false,
      "2XL": false,
      "3XL": false,
    },
    price:125,
    badge:{
      badge1: "None",
      badge2: "Champions League Pack +$25.00",
      badge3: "La Liga +$15.00"
    },
    NameNumber:{
      name1:"None",
      name2:"Select Player +$25.00",
      name3:"Personalize +$25.00"
    }
  },
  {
    name: "Third",
    color: "black",
    images: [IMG3, IMG1, IMG2, IMG4],
    sizes: {
      XS: true,
      S: true,
      M: true,
      L: false,
      XL: false,
      "2XL": false,
      "3XL": false,
    },
    price:125,
    badge:{
      badge1: "None",
      badge2: "Champions League Pack +$25.00",
      badge3: "La Liga +$15.00"
    },
    NameNumber:{
      name1:"None",
      name2:"Select Player +$25.00",
      name3:"Personalize +$25.00"
    }
  },
];

function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [selectBadge, setSelectBadge] = useState("None");
  const [selectNameNumber, setSelectNameNumber] = useState("None");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleBadgeChange = (badge) =>{
    setSelectBadge(badge);
  }

  const handleNameNumberChange = (nameNumber) =>{
    setSelectNameNumber(nameNumber);
  } 

  const currentKit = kits.find(kit => kit.name === currentTab)
  const totalPrice = currentKit.price + (selectBadge === "Champions League Pack +$25.00" ? 25 : selectBadge === "La Liga +$15.00" ? 15 : 0) + (selectNameNumber === "Select Player +$25.00" || selectNameNumber === "Personalize +$25.00" ? 25 : 0 )
  
  return (
    <>
      {/* <h1 className="title">Create your own</h1>
      <div className="tab">
        {
          kits.map((kit) => (
            <div key={kit.name} className={`item ${currentTab === kit.name ? "active" : ""}`}
              onClick={() => handleTabClick(kit.name)}
            >
              {kit.name}
            </div>
          ))
        }
      </div>
      <div className="inside-card">
        <div className="card">
          <Carousel images={currentKit.images} />
          <KitTitles 
            name={currentKit.name}
            color={currentKit.color}
            sizes={currentKit.sizes}
            price={totalPrice}
            badge={currentKit.badge}
            NameNumber={currentKit.NameNumber}
            onBadgeChange={handleBadgeChange}
            onNameNumberChange={handleNameNumberChange}
            className="windowsize"          
          />
        </div>
      </div> */}

      <Biblusi />
    </>
  );
}

export default App;
