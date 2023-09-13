const textArea = document.querySelector('.text-input textarea');
const preview = document.querySelector('.preview');
const words = document.querySelector('.words')
const character = document.querySelector('.char')

window.addEventListener('load', ()  => {
    // let high = textArea.value.split(' ');
    // high.forEach(element => {
        //     hljs.highlightElement(element)
        // });
    })
    function displayPreview () {
            preview.innerHTML = marked.parse(textArea.value);
            let characterVal = textArea.value.split(' ');
            let wordsVal = textArea.value.split('');
            console.log(words.length/400);
            words.textContent = wordsVal.length;
            character.textContent = characterVal.length;
        }

textArea.addEventListener('input', displayPreview);