const tela = document.querySelector("#tela");
const teclas = document.querySelectorAll(".tecla");

let num = 0;
let ultimaOperacao = "";

function modificarTela(tecla){
    const valor = tecla.textContent;

    if(valor=="C"){
        limpaTelaC();
        return;
    }

    if(["+","-","x",":","="].includes(valor)){
        tratarOperacao(valor);
        return;
    }

    formarNumero(valor);
}

function tratarOperacao(op){
    if(tela.textContent === "") return;

    if(op === "="){
        garanteUltimaOperacao();
        ultimaOperacao = "";
        return;
    }

    if(num === 0 && ultimaOperacao === ""){
        num = parseFloat(tela.textContent);
    }
    else{
        garanteUltimaOperacao();
    }

    ultimaOperacao = mapOperacao(op);
    limpaTela();
}

function mapOperacao(op){
    if(op === "+") return "sum";
    if(op === "-") return "sub";
    if(op === "x") return "mtp";
    if(op === ":") return "div";
    return "";
}

function clicarTecla(tecla){
    tecla.addEventListener("click",() => modificarTela(tecla));
}

function formarNumero(valor){
    tela.textContent += valor;
}

function limpaTelaC(){
    tela.textContent = "";
    num = 0;
    ultimaOperacao = "";
}

function limpaTela(){
    tela.textContent = "";
}

function mostrarNumero(){
    tela.textContent = num;
}

function garanteUltimaOperacao(){

    const valorAtual = parseFloat(tela.textContent);

    switch(ultimaOperacao){
        case "sum":
            num += valorAtual;
            break;

        case "sub":
            num -= valorAtual;
            break;
        case "div":
            num /= valorAtual;
            break;
        case "mtp":
             num *= valorAtual;
             break;
    }

    mostrarNumero();

}

teclas.forEach(clicarTecla);
