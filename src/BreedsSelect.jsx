

export const BreedsSelect = (props) => {

  const view = () => {
    fetch('https://dog.ceo/api/breed/hound/images/random/3')
      .then(response => response.json())
      .then(data => {
        props.setSelectedDogs(data.message);
      })
  }

  return <>
    <select onChange={(e) => props.setSelectedBreeds(e.target.value)}>
      <option value="props.selectedBreeds">{props.breeds}</option>
    </select>
    <button onClick={view}>表示</button>
    <img src="props.selectedDogs" alt="" />
  </>
}

export default BreedsSelect
