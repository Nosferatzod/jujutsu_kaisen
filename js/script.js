document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const backgroundMusic = document.getElementById("background-music");
    const volumeSlider = document.getElementById("volume-slider");
    const backgroundVideo = document.getElementById("background-video");

    backgroundMusic.play();

    volumeSlider.addEventListener("input", () => {
        backgroundMusic.volume = volumeSlider.value; // Ajusta o volume da música
    });

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            alert(`Bem-vindo, ${username}! Vamos começar o jogo.`);
            window.location.href = "game.html"; // Substitua pelo URL real do jogo
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    });
});


const enterButton = document.getElementById('enterButton');

enterButton.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        window.location.href = 'game.html';
    } else {
        // Exibindo um alerta caso os campos não sejam preenchidos
        alert('Por favor, preencha todos os campos.');
    }
});

const volumeSlider = document.getElementById('volume-slider');
const backgroundMusic = document.getElementById('background-music');

volumeSlider.addEventListener('input', function() {
    backgroundMusic.volume = volumeSlider.value;
});
