import React, {useState} from "react";
import "./corousel.css"
import IMG1 from "./assets/photo1.webp"
import IMG2 from "./assets/photo2.webp"
import IMG3 from "./assets/photo3.webp"
import IMG4 from "./assets/photo4.webp"
const Carousel = () =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    const cards = [IMG1,IMG2,IMG3,IMG4];
    
    const moveCarousel = (direction) =>{
        const newIndex = (currentIndex + direction + cards.length) % cards.length;
        setCurrentIndex(newIndex);
    };

    const selectImage = (index) =>{
        setCurrentIndex(index);
    };

    return(
        <div className="carousel-container">
            <div className="main-image">
                <img src={cards[currentIndex]} alt={`slide ${currentIndex}`}/>
            </div>
            <div className="thumbnails">
                {
                    cards.map((card,index) =>(
                        <img
                            key={index}
                            src={card}
                            alt={`Thumbnail ${index}`}
                            className= {`thumb {index === currentIndex ? "active" : ""}`}
                            onClick={() => selectImage(index)}
                        />
                    ))
                }
            </div>
            <button className="prev" onClick={() => moveCarousel(-1)}> &lt;</button>
            <button className="next " onClick={() => moveCarousel(1)}> &gt;</button>
        </div>
    )
}

export default Carousel;