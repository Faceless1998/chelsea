import React from "react";
import "./biblusi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/fontawesome-free-solid";


const Biblusi = ({books}) => {
  const renderStart = (stars) => {
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starArray.push(
          <span key={i} className="star filled">
            {" "}
            <FontAwesomeIcon icon={faStar} />{" "}
          </span>
        );
      } else {
        starArray.push(
          <span key={i} className="star empty">
            {" "}
            <FontAwesomeIcon icon={faStar} />{" "}
          </span>
        );
      }
    }
    return starArray;
  };
console.log(books)
  return (
    <div className="books">
      {books.map((book, index) => (
        <div className="single-book" key={index}>
          <div className="book">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="titler">
            <div className="book-name">{book.title}</div>

            <div className="rating">
              {renderStart(book.stars)} ({book.stars})
            </div>
            <div className="price">
              {book.sale_status ? (
                <div className="price-status">
                  <span className="throught">{book.price}</span>
                  <span className="lari">&#8382;</span>
                </div>
              ) : (
                <div className="price-status none">none</div>
              )}
              {book.sale_status ? (
                <div className="prices">
                  <span className="normal">{book.sale}</span>
                  <span className="lari">&#8382;</span>
                </div>
              ) : (
                <div className="prices">
                  <span className="normal">{book.price}</span>
                  <span className="lari">&#8382;</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Biblusi;
