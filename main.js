const textArea = document.querySelector(".text-input textarea");
const preview = document.querySelector(".preview");
const words = document.querySelector(".words");
const character = document.querySelector(".char");
const loading = document.querySelector(".loading");
const readingTime = document.querySelector('.time');
// setTimeout(loading.classList.add("hidden"), 5000);
window.addEventListener('load', () => {
  setTimeout(() => {
    loading.classList.add('hidden')
  },1000)
})

function readTime (textArea) {
  let wordsVal = textArea.split(" ");
  let characterVal = textArea.split("");
  let length = wordsVal.length / 400;
  readingTime.textContent = `${Math.max(1, length.toFixed())} Min Read`
  words.textContent = wordsVal.length;
  character.textContent = characterVal.length - 1;
}
function displayPreview() {
  preview.innerHTML = marked.parse(textArea.value);
  readTime(textArea.value)
}

textArea.addEventListener("input", displayPreview);
