import React from 'react'
import "./biblusi.css"
import IMG1 from "./../assets/1.png"
import IMG2 from "./../assets/2.png"
import IMG3 from "./../assets/3.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'
const books = [
    {
        title:"ONE-PUNCH MAN VOL. 05",
        image:IMG1,
        stars:1,
        price:25.99,
        sale_status:false,
        sale:16.99
    },
    {
        title:"ONE-PUNCH MAN VOL. 03",
        image:IMG2,
        stars:5,
        price:25.99,
        sale_status:true,
        sale:16.99
    },
    {
        title:"ONE PIECE VOL. 19",
        image:IMG3,
        stars:3,
        price:25.99,
        sale_status:false,
        sale:16.99
    },{
        title:"ONE-PUNCH MAN VOL. 05",
        image:IMG1,
        stars:1,
        price:25.99,
        sale_status:false,
        sale:16.99
    },
    {
        title:"ONE-PUNCH MAN VOL. 03",
        image:IMG2,
        stars:5,
        price:25.99,
        sale_status:true,
        sale:16.99
    },
    {
        title:"ONE PIECE VOL. 19",
        image:IMG3,
        stars:3,
        price:25.99,
        sale_status:false,
        sale:16.99
    },{
        title:"ONE-PUNCH MAN VOL. 05",
        image:IMG1,
        stars:1,
        price:25.99,
        sale_status:false,
        sale:16.99
    },
    {
        title:"ONE-PUNCH MAN VOL. 03",
        image:IMG2,
        stars:5,
        price:25.99,
        sale_status:true,
        sale:16.99
    },
    {
        title:"ONE PIECE VOL. 19",
        image:IMG3,
        stars:3,
        price:25.99,
        sale_status:false,
        sale:16.99
    },{
        title:"ONE-PUNCH MAN VOL. 05",
        image:IMG1,
        stars:1,
        price:25.99,
        sale_status:false,
        sale:16.99
    },
    {
        title:"ONE-PUNCH MAN VOL. 03",
        image:IMG2,
        stars:5,
        price:25.99,
        sale_status:true,
        sale:16.99
    },
    {
        title:"ONE PIECE VOL. 19",
        image:IMG3,
        stars:3,
        price:25.99,
        sale_status:false,
        sale:16.99
    }
]

const Biblusi = () => {

    const renderStart = (stars) => {
        const starArray = [];
        for (let i = 0; i<5 ; i++){
            if( i < stars){
                starArray.push(<span key={i} className='star filled'> <FontAwesomeIcon icon={faStar} /> </span>)
            }
            else{
                starArray.push(<span key={i} className='star empty'> <FontAwesomeIcon icon={faStar} /> </span>)
            }
        }
        return starArray;
    }


  return (
    <div className='books'>
        {
            books.map((book,index) => (
                <div className='single-book'>
                    <div className='book'>
                        <img src={book.image} alt={book.title} />
                    </div>
                    <div className='titler'>
                        <div className='book-name'>
                            {book.title}
                        </div>

                        <div className='rating'>
                            {renderStart(book.stars)}  ({book.stars})
                        </div>
                        <div className='price'>
                            {  book.sale_status ?  <div className='price-status'><span className='throught'>{book.price}</span><span className='lari'>&#8382;</span></div>: <div className='price-status none'>none</div> }
                            {  book.sale_status ?  <div className='prices'><span className='normal'>{book.sale}</span><span className='lari'>&#8382;</span></div>: <div className='prices'><span className='normal'>{book.price}</span><span className='lari'>&#8382;</span></div> }

                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Biblusi