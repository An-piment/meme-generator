window.onload = function () {
	function writeMeme (self) {
		let memeBoardTest = document.querySelector('#meme-text');
		memeBoardTest.innerText = self.target.value;
	}

	function uploadImage (self) {
		memeImage.src = `${ reader.result }`;
	}

	function loadImage() {
		const image = this.files[0];
		if(image) {
				reader.readAsDataURL(image);
		}
	}

	function fireBorder () {
		memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
	}

	function waterBorder () {
		memeContainer.style.border = '5px double rgb(0, 0, 255)';
	}

	function earthBorder () {
		memeContainer.style.border = '6px groove rgb(0, 128, 0)';
	}

	function onHover (self) {
		self.target.style.background = 'rgb(175, 202, 22)';
	}

	function memeButtons () {
		for (let index = 1; index < 5; index += 1){
			let imageClass = '#meme-'+ index;
			let buttonMeme = document.querySelector(imageClass);
			buttonMeme.addEventListener('click', selectMeme);
		}
	}

	function selectMeme(self) {
		memeImage.src = self.target.src;
	}

	function returnBackground (self) {
		let id = self.target.id;
		if (id === 'fire') {
			self.target.style.background = 'rgb(255, 0, 0)';
		} else if (id === 'earth') {
			self.target.style.background = 'rgb(0, 128, 0)';
		} else {
			self.target.style.background = 'rgb(0, 0, 255)';
		}
	}

	let textWrite = document.querySelector('#text-input');
	let memeContainer = document.querySelector('#meme-image-container');
	let uploadImageButton = document.querySelector('#meme-insert');
	let memeImage = document.querySelector('#meme-image');
	let fireButton = document.querySelector('#fire');
	let waterButton = document.querySelector('#water');
	let earthButton = document.querySelector('#earth');
	const reader = new FileReader();
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
	memeButtons();
}