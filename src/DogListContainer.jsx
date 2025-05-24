import React, { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect';
export const DogListContainer = () => {

  const [breeds, setBreeds] = useState("");
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setBreeds(data.message);
      })
  })

  const [selectedBreeds, setSelectedBreeds] = useState("");

  const [selectedDogs, setSelectedDogs] = useState("");
  return <>
    <BreedsSelect breeds={breeds} setSelectedBreeds={setSelectedBreeds} selectedBreeds={selectedBreeds} selectedDogs={selectedDogs} setSelectedDogs={setSelectedDogs} />
  </>
}

export default DogListContainer
