import React from "react";
import "./kittitles.css";

const KitTitles = ({ name, color, sizes, price, badge, NameNumber }) => {
  return (
    <div className="kit-title">
      <h2>
        Mens {name} Jersey 23/24 {color}
      </h2>
      <p>${price}.00</p>
      <div className="sizes">
        <h3>Avaliable Sizes:</h3>
        <ul>
          {Object.keys(sizes).map((size) => (
            <li
              key={size}
              className={sizes[size] ? "avaliable" : "unavaliable"}
            >
              {size.replace("size", "size ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="badge">
        <h3>Badge:</h3>
        <ul>
          {Object.values(badge).map((badgeOption, index) => (
            <li key={index}>{badgeOption}</li>
          ))}
        </ul>
      </div>

      <div className="name-number">
        <h3>Name & Number:</h3>
        <ul>
          {Object.values(NameNumber).map((NameNumberOption, index) => (
            <li key={index}>{NameNumberOption}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KitTitles;
