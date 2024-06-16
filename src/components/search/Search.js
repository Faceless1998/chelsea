import React, { useEffect, useState } from "react";
import axios from "axios";
import "./search.css";
import { useTranslation } from "react-i18next";

const Search = () => {

    const { t } = useTranslation();

  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBooks, setFilterBooks] = useState([]);

  useEffect(() => {
    axios
      .get("./books.json")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilterBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilterBooks([]);
    }
  }, [searchTerm, books]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
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
            {book.title} By {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;