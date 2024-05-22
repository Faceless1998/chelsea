import React from 'react';
import "./corousel.css";

const NewTitle = ({ sizes, saxeli,color }) => {
    console.log(saxeli);

    const renderSize = (size, label) => (
        <div className={`${size ? "radial" : "radial crossed"}`}>{label}</div>
    );

    return (
        <div>
            <div className='fonttitle'>
                Mens {saxeli} Jersey 23/24 {color}
            </div>
            <div className='mysize windowsize'>
                {renderSize(sizes.size1, 'XS')}
                {renderSize(sizes.size2, 'S')}
                {renderSize(sizes.size3, 'M')}
                {renderSize(sizes.size4, 'L')}
                {renderSize(sizes.size5, 'XL')}
                {renderSize(sizes.size6, '2XL')}
                {renderSize(sizes.size7, '3XL')}
            </div>
        </div>
    );
}

export default NewTitle;
