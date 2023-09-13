const textArea = document.querySelector(".text-input textarea");
const preview = document.querySelector(".preview");
const words = document.querySelector(".words");
const character = document.querySelector(".char");
const loading = document.querySelector(".loading");
const readingTime = document.querySelector('.time');
const previewBtnOpen = document.querySelector('.preview-open')
const previewBtnClose = document.querySelector('.preview-close')
const bigPreviewContainer = document.querySelector('.preview-container')
const previewText = document.querySelector('.big-preview');
const eyeBtn = document.querySelector('.eye-btn') // ONly in mobile to show the preview div


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
  character.textContent = characterVal.length;
}
function displayPreview(text) {
  preview.innerHTML = marked.parse(text);
  readTime(text)
}

function togglePreviewContainer () {
    bigPreviewContainer.classList.toggle('hidden')
    previewText.value = textArea.value
    // displayPreview(previewText.value)
    console.log(previewText.value);
} 
function displayPreviewContainer (text) {
    preview.innerHTML = marked.parse(text)
    textArea.value = text
    readTime(text)
}
previewBtnOpen.addEventListener('click', togglePreviewContainer)
previewBtnClose.addEventListener('click', togglePreviewContainer)

textArea.addEventListener("input",(e) => displayPreview(textArea.value));
previewText.addEventListener("input",(e) => displayPreviewContainer(previewText.value));


eyeBtn.addEventListener('click', () => {
    let text = document.querySelector('.text-input textarea')
    let mobilePreview = document.querySelector('.mobile-preview')
    text.classList.toggle('hidden')
    mobilePreview.classList.toggle('hidden')
    mobilePreview.innerHTML = marked.parse(text.value);
})