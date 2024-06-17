import React, { useEffect, useState } from "react";
import axios from "axios";
import "./search.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Search = () => {
  const { t } = useTranslation();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/books.json")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  /*

  {
                      ? option.phoneNameGeo
                      : 
                      ? option.phoneName
                      : option.phoneNameSp}
                      */
  useEffect(() => {
    if (searchTerm) {
      setFilterBooks(
        books.filter((book) =>
          localStorage.getItem("lang") === "ge"
            ? book.titlegeo.toLowerCase().includes(searchTerm.toLowerCase())
            : localStorage.getItem("lang") === "en"
            ? book.title.toLowerCase().includes(searchTerm.toLowerCase())
            : book.titlesp.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
              book.id.toString().includes(searchTerm.toString())
        )
      );
    } else {
      setFilterBooks([]);
    }
  }, [searchTerm, books]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleItemClick = () => {
    setSearchTerm("");
    setFilterBooks([]);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={t("search")}
        className="input"
      />
      <ul className="list">
        {filterBooks.map((book) => (
          <li key={book.id} className="list-item">
            <Link to={`/books/${book.id}`} onClick={handleItemClick}>
              {localStorage.getItem("lang") === "ge"
                ? `${book.titlegeo}, ავტორი: ${book.authorgeo}`
                : localStorage.getItem("lang") === "en"
                ? `${book.title} By ${book.author}`
                : `${book.titlesp} Bambino ${book.authorsp}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
