let valor = 0;

const contador = document.querySelector("#contador")
const btnMais = document.querySelector("#mais");
const btnMenos = document.querySelector("#menos");

btnMais.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});

btnMenos.addEventListener("click", () => {
    if(valor==0){
        contador.textContent = valor;
    }
    else{
        valor--;
        contador.textContent = valor;
    }
});