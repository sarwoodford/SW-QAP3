// Front End Programming - QAP 3
// Author: Sara Woodford
// Submission Date: July 27, 2024

import React, { useState, useEffect } from 'react';

function BreedSelector({breedSelected, setBreed, numImage, setNumImage, fetchImage}){
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response => response.json())
        .then(data => setBreeds(Object.keys(data.message)));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        fetchImage();
    };  

    return(
        <form onSubmit = {submit}>
            <label className = "labelText">
                Breed: 
                <select value = {breedSelected} onChange={(e) => setBreed(e.target.value)} className='selectBreed'>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed}>{breed}</option>
                    ))}
                </select>
            </label>
            <label className="labelText">
                Number of Images:
                <input
                    type='number'
                    value={numImage}
                    onChange={(e) => setNumImage(e.target.value)}
                    min='1'
                    max='100'
                />
            </label>
            <button type='submit' className ="buttonText">
                See Dogs!
            </button>
        </form>
    );
}

export default BreedSelector;