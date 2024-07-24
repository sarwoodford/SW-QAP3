// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import './App.css';
import React, { useState } from 'react';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import Header from './components/Header';



function App() {
  const [breedSelected, setBreed] = useState('');
  const [numImage, setNumImage] = useState(1);
  const [fetchImage, setFetchImage] = useState([]);

  return (
    <div className='App'>
      <Header/>
      <BreedSelector
        breedSelected = {breedSelected}
        setBreed = {setBreed}
        numImage = {numImage}
        setNumImage = {setNumImage}
        
        setFetchImage = {setFetchImage}
      />
      <ImageGallery fetchImage = {fetchImage}/>
    </div>
  );
}

export default App;