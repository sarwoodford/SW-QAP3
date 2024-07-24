// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';

function ImageGallery({ images }){
    return (
        <div className='imageGallery'>
            {images.map((image, index) => (
                <img key={index} src={image} alt='doggy'/>
            ))}
        </div>
    );
}

export default ImageGallery;