const statusText = document.querySelector("#status");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    statusText.classList.toggle("ativo");

    if(statusText.classList.contains("ativo")){
        statusText.textContent = "Ligado";
    }
    else{
        statusText.textContent = "Desligado"
    }
})