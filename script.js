const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('imagem');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

textInput.addEventListener('keyup', () => {
  memeText.innerText = textInput.value;
});
// Ensinada nas dicas do readme
let loadFile = function (event) {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
  memeImg.onload = function () {
    URL.revokeObjectURL(memeImg.src);
  };
};

fire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});
water.addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});

earth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});
