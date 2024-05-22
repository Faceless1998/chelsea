import React, {useState} from "react";
import "./corousel.css"

const Carousel = ({images}) =>{
    const [currentIndex,setCurrentIndex] = useState(0);
    
    const moveCarousel = (direction) =>{
        const newIndex = (currentIndex + direction + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    const selectImage = (index) =>{
        setCurrentIndex(index);
    };

    return(
        <div className="carousel-container windowsize">
            <div className="main-image">
                <img src={images[currentIndex]} alt={`slide ${currentIndex}`}/>
            </div>
            <div className="thumbnails">
                {
                    images.map((card,index) =>(
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