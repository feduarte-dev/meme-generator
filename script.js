const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('imagem');

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
