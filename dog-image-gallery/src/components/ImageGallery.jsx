// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';



const ImageGallery = ({images}) => {
    if(!Array.isArray(images) || images.length === 0){
        return <div>Cannot Display Images. Please Retry.</div>
    }
    return(
        <div className = 'ImageGallery'>
            {images.map((image, index) => (
                <img key={index} src={image} alt='doggy' className='image'/>
            ))}
        </div>
    );
};

export default ImageGallery
