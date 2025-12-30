const corpo = document.querySelector("#corpo");
const btn = document.querySelector("#btn-style");

function ativarDarkMode(){
    corpo.classList.toggle("dark-mode");
}

btn.addEventListener("click", ativarDarkMode)