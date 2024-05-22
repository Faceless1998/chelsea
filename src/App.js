import { useState } from "react";
import "./App.css";
import Carousel from "./Carousel";
import IMG1 from "./assets/photo1.webp";
import IMG2 from "./assets/photo2.webp";
import IMG3 from "./assets/photo3.webp";
import IMG4 from "./assets/photo4.webp";
import NewTitle from "./NewTitle";

const imagesHome = [IMG1, IMG2, IMG3, IMG4];
const imagesAway = [IMG2, IMG1, IMG3, IMG4];
const imagesThird = [IMG3, IMG1, IMG2, IMG4];

const HomeSizes = {
  size1: false,
  size2: true,
  size3: false,
  size4: false,
  size5: false,
  size6: false,
  size7: false,
};

const AwaySizes = {
  size1: false,
  size2: true,
  size3: true,
  size4: false,
  size5: false,
  size6: false,
  size7: false,
};

const ThirdSizes = {
  size1: true,
  size2: true,
  size3: true,
  size4: false,
  size5: false,
  size6: false,
  size7: false,
};

const maisuri = [{ form1: "Home" , color1: "White" }, { form2: "Away" ,color2: "Navy" }, { form3: "Third", color3:"Black" }];

function App() {
  const [currentTab, setCurrentTab] = useState("Home");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <h1 className="title">Create your own</h1>
      <div className="tab">
        <div
          className={`item ${currentTab === "Home" ? "active" : ""}`}
          onClick={() => handleTabClick("Home")}
        >
          Home
        </div>
        <div
          className={`item ${currentTab === "Away" ? "active" : ""}`}
          onClick={() => handleTabClick("Away")}
        >
          Away
        </div>
        <div
          className={`item ${currentTab === "Third" ? "active" : ""}`}
          onClick={() => handleTabClick("Third")}
        >
          Third
        </div>
      </div>

      <div className="inside-card">
        <div className="card">
          {currentTab === "Home" && (
            <>
              <Carousel images={imagesHome} />
              <NewTitle saxeli={maisuri[0].form1} color={maisuri[0].color1} sizes={HomeSizes} className="windowsize" />
            </>
          )}
          {currentTab === "Away" && (
            <>
              <Carousel images={imagesAway} />
              <NewTitle saxeli={maisuri[1].form2} color={maisuri[1].color2}  sizes={AwaySizes} className="windowsize" />
            </>
          )}
          {currentTab === "Third" && (
            <>
              <Carousel images={imagesThird} />
              <NewTitle saxeli={maisuri[2].form3} color={maisuri[2].color3}  sizes={ThirdSizes} className="windowsize" />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
