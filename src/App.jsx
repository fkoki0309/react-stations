// DO NOT DELETE

import './App.css'
import { useState } from 'react';
import Header from './Header';
import Description from './Description';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';
import BreedsSelect from './BreedsSelect';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("");


  return (
    <div>
      <Header />
      <Description
        setDogUrl={setDogUrl}
      />
      <DogImage
        imageUrl={dogUrl}
      />
      <DogListContainer />



    </div>
  )
}
