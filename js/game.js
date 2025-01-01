document.addEventListener("DOMContentLoaded", () => {
    const volumeSlider = document.getElementById("volume-slider");
    const hintElement = document.getElementById("hint");
    const resultBox = document.getElementById("result");
    const selectCharacterBtn = document.getElementById("select-character-btn");
    const characterList = document.getElementById("character-list");
    const searchInput = document.getElementById("search-input");
    const charactersContainer = document.getElementById("characters-container");
    const backgroundMusic = document.getElementById('background-music');  // Mova para cima

 
    backgroundMusic.play().catch(error => {
        console.log("Erro ao tentar reproduzir a música: " + error);
    });
    volumeSlider.addEventListener("input", () => {
        backgroundMusic.volume = volumeSlider.value; // Ajusta o volume da música
    });


    const characters = [{
            name: "Gojo Satoru",
            hints: ["Este personagem usa o Infinito.", "Ele tem uma habilidade de 'Limite'."],
            imgSrc: "../image/gojo.png"
        },
        {
            name: "Yuji Itadori",
            hints: ["Ele possui Sukuna dentro de si.", "Ele é um estudante da Jujutsu High."],
            imgSrc: "../image/itadori.jpg"
        },
        {
            name: "Megumi Fushiguro",
            hints: ["Ele invoca Shikigamis.", "Ele tem um irmão chamado Tsumiki."],
            imgSrc: "../image/megumi.jpg"
        },
        {
            name: "Nobara Kugisaki",
            hints: ["Usa bonecos e pregos como arma.", "Ela é uma exorcista de Jujutsu."],
            imgSrc: "../image/nobara.png"
        },
        {
            name: "Sukuna",
            hints: ["Ele é o rei das maldições.", "Possui 20 dedos que são fontes de seu poder."],
            imgSrc: "../image/rei.jpg"
        },
        {
            name: "Toji Fushiguro",
            hints: ["Ele não tem nenhuma habilidade de Jujutsu.", "É o pai de Megumi Fushiguro."],
            imgSrc: "../image/toji.jpeg"
        },
        {
            name: "Hakari Kinji",
            hints: ["Ele tem uma habilidade chamada 'Cursed Technique Reversal'.", "Ele é um dos membros mais fortes da Jujutsu High."],
            imgSrc: "../image/hakari.jpg"
        },
        {
            name: "Yuta Okkotsu",
            hints: ["Ele possui a maldição de Rika.", "Ele é um dos protagonistas do filme de Jujutsu Kaisen."],
            imgSrc: "../image/yuta.png"
        },
        {
            name: "Nanami Kento",
            hints: ["Ele trabalha como um exorcista de alto escalão.", "Ele é famoso por ser calculista e prático."],
            imgSrc: "../image/nanami.jpg"
        },
        {
            name: "Maki Zen'in",
            hints: ["Ela tem uma força física impressionante.", "Ela é parte do clã Zen'in, mas não tem habilidade de Jujutsu."],
            imgSrc: "../image/maki.jpg"
        },
        {
            name: "Panda",
            hints: ["Ele é um 'Grade 1' Jujutsu Sorcerer.", "Ele tem uma forma de luta única."],
            imgSrc: "../image/panda.jpg"
        },
        {
            name: "Yuki Tsukumo",
            hints: ["Ela é uma feiticeira extremamente poderosa e mestre da técnica de amplificação de energia."],
            imgSrc: "../image/yuki.png"
        }
    ];

    let currentCharacterIndex = Math.floor(Math.random() * characters.length);
    let hintIndex = 0;

    hintElement.textContent = `Dica: ${characters[currentCharacterIndex].hints[hintIndex]}`;

    selectCharacterBtn.addEventListener("click", () => {
        characterList.classList.toggle("active");
    });

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
        );
        renderCharacterList(filteredCharacters);
    });

    function renderCharacterList(charactersList) {
        charactersContainer.innerHTML = "";
        charactersList.forEach(character => {
            const box = document.createElement("div");
            box.classList.add("character-box");
            box.innerHTML = `
                <img src="${character.imgSrc}" alt="${character.name}">
                <p>${character.name}</p>
            `;
            box.addEventListener("click", () => {
                checkAnswer(character.name);
            });
            charactersContainer.appendChild(box);
        });
    }

    function checkAnswer(userGuess) {
        if (userGuess.toLowerCase() === characters[currentCharacterIndex].name.toLowerCase()) {
            resultBox.textContent = "Parabéns! Você acertou!";
            resultBox.style.color = "lime";
            updateScore(true);
            resetGame();
        } else {
            resultBox.textContent = "Errado. Tente novamente.";
            resultBox.style.color = "red";
            updateScore(false);
            showNextHint();
        }
    }

    function updateScore(isCorrect) {
        const correctScore = document.getElementById("correct-score");
        const incorrectScore = document.getElementById("incorrect-score");

        if (isCorrect) {
            correctScore.textContent = parseInt(correctScore.textContent) + 1;
        } else {
            incorrectScore.textContent = parseInt(incorrectScore.textContent) + 1;
        }
    }

    function showNextHint() {
        if (hintIndex < characters[currentCharacterIndex].hints.length - 1) {
            hintIndex++;
            hintElement.textContent = `Dica: ${characters[currentCharacterIndex].hints[hintIndex]}`;
        }
    }

    function resetGame() {
        setTimeout(() => {
            hintIndex = 0;
            currentCharacterIndex = Math.floor(Math.random() * characters.length);
            hintElement.textContent = `Dica: ${characters[currentCharacterIndex].hints[hintIndex]}`;
            resultBox.textContent = "";
            searchInput.value = "";
            renderCharacterList(characters); // Reset the list
        }, 2000);
    }

    

    renderCharacterList(characters);
});
