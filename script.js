const reader = new FileReader();
const memeContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');

function writeMeme(self) {
  const memeBoardTest = document.querySelector('#meme-text');
  memeBoardTest.innerText = self.target.value;
}

function uploadImage() {
  memeImage.src = `${reader.result}`;
}

function loadImage() {
  const image = this.files[0];
  if (image) {
    reader.readAsDataURL(image);
  }
}

function fireBorder() {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
}

function waterBorder() {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
}

function earthBorder() {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
}

function onHover(self) {
  self.target.style.background = 'rgb(175, 202, 22)';
}

function selectMeme(self) {
  memeImage.src = self.target.src;
}

function memeButtons() {
  for (let index = 1; index < 5; index += 1) {
    const imageClass = `#meme-${index}`;
    const buttonMeme = document.querySelector(imageClass);
    buttonMeme.addEventListener('click', selectMeme);
  }
}

function returnBackground(self) {
  const { id } = self.target.id;
  if (id === 'fire') {
    self.target.style.background = 'rgb(255, 0, 0)';
  } else if (id === 'earth') {
    self.target.style.background = 'rgb(0, 128, 0)';
  } else {
    self.target.style.background = 'rgb(0, 0, 255)';
  }
}

function generateButtons() {
  const textWrite = document.querySelector('#text-input');
  const uploadImageButton = document.querySelector('#meme-insert');
  const fireButton = document.querySelector('#fire');
  const waterButton = document.querySelector('#water');
  const earthButton = document.querySelector('#earth');
  fireButton.addEventListener('click', fireBorder);
  fireButton.addEventListener('mouseover', onHover);
  fireButton.addEventListener('mouseleave', returnBackground);
  waterButton.addEventListener('click', waterBorder);
  waterButton.addEventListener('mouseover', onHover);
  waterButton.addEventListener('mouseleave', returnBackground);
  earthButton.addEventListener('click', earthBorder);
  earthButton.addEventListener('mouseover', onHover);
  earthButton.addEventListener('mouseleave', returnBackground);
  textWrite.addEventListener('input', writeMeme);
  reader.addEventListener('load', uploadImage);
  uploadImageButton.addEventListener('change', loadImage);
}

window.onload = () => {
  generateButtons();
  memeButtons();
};
