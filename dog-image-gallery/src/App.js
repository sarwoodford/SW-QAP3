// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import './App.css';
import React, { useState } from 'react';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';
import Message from './components/Message';
import Footer from './components/Footer';



function App() {
  const [breedSelected, setBreed] = useState('');
  const [numImage, setNumImage] = useState(1);
  const [images, setImage] = useState([]);
  const [message, setMessage] = useState('Please Complete Fields to View Adorable Images!')

  const fetchImage = async() => {
    try{
      const response = await fetch(`https://dog.ceo/api/breed/${breedSelected}/images/random/${numImage}`);
      
      const data = await response.json();
        setImage(data.message);
        setMessage('');
    }
      catch(error) {
        setMessage('Error Fetching Images. Please Retry')
      }
    };

  return (
    <div className='App'>
      <Header/>
      <div className='Main'>
        <Message text={message}/>
        <BreedSelector
          breedSelected = {breedSelected}
          setBreed = {setBreed}
          numImage = {numImage}
          setNumImage = {setNumImage}
          fetchImage = {fetchImage}
        />
        <ImageGallery images = {images}/>
      </div>
      <Footer />
    </div>
  )}

export default App;

// import React from 'react';

// function App(){
//   return <div> Testing Mounting </div>;
// }

// export default App;

// testing each component

// import React from 'react';
// import BreedSelector from './components/BreedSelector';
// // import ImageGallery from './components/ImageGallery';
// import Header from './components/Header';

// function App(){
//   return(
//     <div>
//     <Header />
//     <BreedSelector />
//     {/* <ImageGallery /> */}
//     </div>
//   )
// }

// export default App;

// import React from 'react';
// import ImageGallery from "./components/ImageGallery"

// function App(){
//   return <div><ImageGallery /></div>
// }

// export default App;