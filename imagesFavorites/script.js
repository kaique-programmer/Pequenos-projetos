// array storaging of favorites
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const imageContainer = document.querySelector('.image');
const buttonGetImage = document.querySelector('button');

//click on button, for to get external image
buttonGetImage.onclick = () => updateImage();

// to click on image
imageContainer.onclick = () => updateAll();

// Methods
function getState() {
  const imageSource = document.querySelector('.image img').src;

  const index = favorites.indexOf(imageSource);
  const existInLocalStorage = index != 1;

  return { imageSource, index, existInLocalStorage };
}

function updateAll() {
  updateFavorites();
  updateClasses();
}

function updateFavorites() {
  const { imageSource, index, existInLocalStorage } = getState();
  // to save in local storage or remove
  existInLocalStorage ? favorites.splice(index, 1) : favorites.push(imageSource);

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateClasses() {
  const { existInLocalStorage } = getState();

  imageContainer.classList.remove('fav');

  if (existInLocalStorage) {
    imageContainer.classList.add('fav');
  }
}

async function updateImage() {
  await getExternalImage();
  updateClasses();
}

async function getExternalImage() {
  const res = await fetch('https://source.unsplash.com/random');

  imageContainer.innerHTML = `<img src="${res.url}" >`;
}

getExternalImage();
