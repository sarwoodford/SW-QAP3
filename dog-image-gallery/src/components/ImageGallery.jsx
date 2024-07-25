// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React from 'react';

// function ImageGallery({images}){
//     if (!Array.isArray(images)){
//         console.log('not an array')
//         throw new Error('Error handling images. Please retry.')
//     }
//     return(
//         <div>
//             {images.length > 0 ?(
//                 images.map((image, index) => (
//                     <img key={index} src={image} alt='doggy' />
//                 ))
//             ):(
//                 <h5>no images to display. please retry</h5>
//             )}
//         </div>
//     );
// }

// export default ImageGallery;

const ImageGallery = ({images}) => {
    return(
        <div className = 'ImageGallery'>
            {images.map((image, index) => (
                <img key={index} src={image} alt='doggy' className='image'/>
            ))}
        </div>
    );
}

export default ImageGallery