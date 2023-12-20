const length = palabras.length;
const generatorButton = document.querySelector("#generator");
const word0 = document.querySelector("#word0");
const word1 = document.querySelector("#word1");
const word2 = document.querySelector("#word2");
const word3 = document.querySelector("#word3");
const word4 = document.querySelector("#word4");
const word5 = document.querySelector("#word5");


const getRandomWord = () => {
    let random = Math.floor(Math.random() * length);
    return palabras[random];
};

generatorButton.addEventListener("click", e => {
    let n = 0;
    let id;
    id = setInterval(f => {
        if (n < 10) {
            randomWord0();
            randomWord1();
            randomWord2();
            randomWord3();
            randomWord4();
            randomWord5();
            n++;
        } else {
            clearInterval(id);
        }
    }, 100)
});

const randomWord0 = () => {
    word0.innerHTML = getRandomWord();
};

const randomWord1 = () => {
    word1.innerHTML = getRandomWord();
};

const randomWord2 = () => {
    word2.innerHTML = getRandomWord();
};

const randomWord3 = () => {
    word3.innerHTML = getRandomWord();
};

const randomWord4 = () => {
    word4.innerHTML = getRandomWord();
};

const randomWord5 = () => {
    word5.innerHTML = getRandomWord();
};
