
import { useState } from 'react';
export const Description = (props) => {


  const randomDogUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        props.setDogUrl(data.message);
      })
  }

  return
  <>
    <p>犬の画像を表示するアプリです</p>
    <button onClick={() => randomDogUrl()}>画像変更</button>
  </>


}

export default Description
