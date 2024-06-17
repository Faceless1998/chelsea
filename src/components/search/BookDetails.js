import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState(null);

  useEffect(() => {
    console.log("I Am Fetching Book No", id);
    axios
      .get("/books.json")
      .then((response) => {
        console.log("Book Data", response.data);
        const foundBook = response.data.find(
          (book) => book.id.toString() === id
        );
        console.log("found Book ", foundBook);
        setBooks(foundBook);
      })
      .catch((error) => console.error("Fetching Error ", error));
  }, [id]);

  if (!books) return <div>წიგნი ვერ მოიძებნა</div>;
  return (
    <div>
      <h1>{books.title}</h1>
      <h2>{books.author}</h2>
      <h3>{books.id}</h3>
    </div>
  );
};

export default BookDetails;
