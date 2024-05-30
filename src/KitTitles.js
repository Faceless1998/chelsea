import React from "react";
import "./kittitles.css";

const KitTitles = ({
  name,
  color,
  sizes,
  price,
  badge,
  NameNumber,
  onBadgeChange,
  onNameNumberChange,
}) => {

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
          {Object.entries(badge).map(([key, badgeOption]) => (
            <li key={key} onClick={() => onBadgeChange(badgeOption)}  className={`items ${badgeOption ? "active" : ""} ` }>
              {badgeOption}
            </li>
          ))}
        </ul>
      </div>

      <div className="name-number">
        <h3>Name & Number:</h3>
        <ul>
          {Object.entries(NameNumber).map(([key, nameNumberOption]) => (
            <li key={key} onClick={() => onNameNumberChange(nameNumberOption)} className={`items ${nameNumberOption ? "active" : ""} ` }>
              {nameNumberOption}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KitTitles;
