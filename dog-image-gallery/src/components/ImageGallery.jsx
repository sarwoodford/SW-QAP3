// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';

// const imageTest=[
//     'https://plus.unsplash.com/premium_photo-1721808508129-ae61f840a599?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// ]

const ImageGallery = ({images}) => {
     console.log('image gallery')
    return(
        <div className = 'ImageGallery'>
            {images.map((image, index) => (
                <img key={index} src={image} alt='doggy' className='image'/>
            ))}
        </div>
    );
}

export default ImageGallery
