const loading = document.querySelector(".loading"); // Loading Window before all Excution
const textArea = document.querySelector(".text-input textarea");
const preview = document.querySelector(".preview");
const words = document.querySelector(".words");
const character = document.querySelector(".char");
const readingTime = document.querySelector(".time");
const previewBtnOpen = document.querySelector(".preview-open");
const previewBtnClose = document.querySelector(".preview-close");
const bigPreviewContainer = document.querySelector(".preview-container");
const previewText = document.querySelector(".big-preview");
const eyeBtn = document.querySelector(".eye-btn"); // ONly in mobile to show the preview div
const previewHtml = document.querySelector(".preview-html");
let convertBol = false; // For Checking the state of markdown to html || html to markdown

window.addEventListener("load", () => {
  loading.classList.add("hidden");
});


// Function for Calculating time takes to read and character
function readTime(textArea) {
  let wordsVal = textArea.split(" ");
  let characterVal = textArea.split("");
  let length = wordsVal.length / 400;
  readingTime.textContent = `${Math.max(1, length.toFixed())} Min Read`;
  words.textContent = wordsVal.length;
  character.textContent = characterVal.length;
}
function displayPreview(text) {
  preview.innerHTML = marked.parse(text);
  readTime(text);
}

function togglePreviewContainer() {
  bigPreviewContainer.classList.toggle("hidden");
  previewText.value = textArea.value;
  console.log(previewText.value);
}
function displayPreviewContainer(text) {
  preview.innerHTML = marked.parse(text);
  textArea.value = text;
  readTime(text);
}
previewBtnOpen.addEventListener("click", togglePreviewContainer);
previewBtnClose.addEventListener("click", togglePreviewContainer);

textArea.addEventListener("input", () => displayPreview(textArea.value));
previewText.addEventListener("input", () =>
  displayPreviewContainer(previewText.value)
);

eyeBtn.addEventListener("click", () => {
  let text = document.querySelector(".text-input textarea");
  let mobilePreview = document.querySelector(".mobile-preview");
  text.classList.toggle("hidden");
  mobilePreview.classList.toggle("hidden");
  mobilePreview.innerHTML = marked.parse(text.value);
});
previewHtml.addEventListener("click", () => {
  if (!convertBol) {
    let converter = new showdown.Converter();
    let text = textArea.value;
    let html = converter.makeHtml(text);
    preview.textContent = html;
    convertBol = true;
  } else {
    convertBol = false;
    displayPreview(textArea.value);
  }
});
