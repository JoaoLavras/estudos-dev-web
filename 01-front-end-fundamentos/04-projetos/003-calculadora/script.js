const tela = document.querySelector("#tela");
const teclas = document.querySelectorAll(".tecla");

//teclas vira um array de tecla

function modificarTela(tecla){
    tela.textContent += tecla.textContent;
}

function clicarTecla(tecla){
    tecla.addEventListener("click",() => modificarTela(tecla));
}

teclas.forEach(clicarTecla); //aqui ele passa o parametro automaticamente

//falta concluir algumas coisas 