const length = palabras.length;
const randomWord = document.querySelector("#randomWord");
const generatorButton = document.querySelector("#generator");

const getRandomWord = () => {
    let random = Math.floor(Math.random() * length);
    return palabras[random];
};

generatorButton.addEventListener("click", e => {
    randomWord.innerHTML = getRandomWord()
});
