const textArea = document.querySelector(".text-input textarea");
const preview = document.querySelector(".preview");
const words = document.querySelector(".words");
const character = document.querySelector(".char");
const loading = document.querySelector(".loading");

setTimeout(loading.classList.add("hidden"), 5000);

function displayPreview() {
  preview.innerHTML = marked.parse(textArea.value);
  let characterVal = textArea.value.split(" ");
  let wordsVal = textArea.value.split("");
  console.log(words.length / 400);
  words.textContent = wordsVal.length;
  character.textContent = characterVal.length - 1;
}

textArea.addEventListener("input", displayPreview);
