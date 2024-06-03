import React from 'react'
import "./biblusi.css"

import bookData from "./../book.json"
import IMG1 from "./../assets/1.png";
import IMG2 from "./../assets/2.png";
import IMG3 from "./../assets/3.png";

import Biblusi from './Biblusi';

const imageMap = {
  IMG1: IMG1,
  IMG2: IMG2,
  IMG3: IMG3,
}

const books = bookData.map( book => ({
  ...book,
  image:imageMap[book.image]
}))

const Catalog = () => {
  return (
    <>
        <Biblusi books={books}/>
    </>
  )
}

export default Catalog