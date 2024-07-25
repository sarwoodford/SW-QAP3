// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';

function ImageGallery({images}){
    if (! images || !Array.isArray(images)){
        throw new Error('Error handling images. Please retry.')
    }
    return(
        <div>
            Image Test 
            {images.map((image, index) => (
                <img key={index} src={image} alt='dog'></img>
            ))}
        </div>
    );
}

export default ImageGallery;