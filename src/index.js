// import './style.css';
import sheet from './style.css';
const appDiv = document.getElementById('app');

fetch('https://rickandmortyapi.com/api/character')
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => {
      const characterElement = document.createElement('div');
      characterElement.classList.add('character_card');
      const characterName = document.createElement('div');
      characterName.classList.add('character_name');
      characterName.innerText = character.name;
      console.log();

      const statusElement = document.createElement('div');
      statusElement.classList.add('character_status');
      statusElement.innerText = `${character.status} - ${character.species}`;

      const locationElement = document.createElement('div');
      locationElement.classList.add('character_location');
      locationElement.innerText = `Last know location ${character.location.name}`;

      const imageElement = document.createElement('div');
      imageElement.classList.add('character_image');

      const image = document.createElement('img');
      image.setAttribute('src', character.image);
      image.setAttribute('alt', 'character image');

      appDiv.appendChild(characterElement);
      characterElement.appendChild(characterName);
      characterName.appendChild(statusElement);
      statusElement.appendChild(locationElement);
      characterElement.appendChild(imageElement);
      imageElement.appendChild(image);
    });
  });