const textArea = document.querySelector('.text-input textarea');
const preview = document.querySelector('.preview');

window.addEventListener('load', ()  => {
    console.log(textArea.value.split(' '));
    let high = textArea.value.split(' ');
    high.forEach(element => {
        hljs.highlightElement(element)
    });
})
function displayPreview () {
    preview.innerHTML = marked.parse(textArea.value);
}

textArea.addEventListener('keyup', displayPreview);