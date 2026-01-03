const btnEnviar = document.querySelector("#btn-enviar");

const inputNome = document.querySelector("#input-nome");
const inputCPF = document.querySelector("#input-cpf");
const inputTelefone = document.querySelector("#input-telefone");
const inputEmail = document.querySelector("#input-email")

const MensagemErroNome = document.querySelector("#erro-nome")
const MensagemErroCpf = document.querySelector("#erro-cpf")
const MensagemErroTelefone = document.querySelector("#erro-telefone")
const MensagemErroEmail = document.querySelector("#erro-email")

const MensagemErroTudoVazio = document.querySelector("#erro-tudo-vazio")

function limpaErros(){
    MensagemErroNome.textContent = "";
    MensagemErroCpf.textContent = "";
    MensagemErroTelefone.textContent = "";
    MensagemErroEmail.textContent = "";
}

function verificaValores(){
    limpaErros();

    if([inputNome,inputCPF,inputTelefone].every(input => input.value.trim() === "")){
        MensagemErroTudoVazio.textContent = "Todos os Campos estão Vazios!";
    } else if(inputNome.value.trim() === ""){
        MensagemErroNome.textContent = "Preencha esse campo!";
    } else if (inputCPF.value.trim() === ""){
        MensagemErroCpf.textContent = "Preencha esse campo!";
    } else if(inputTelefon.value.trim() === ""){
        MensagemErroTelefone.textContent = "Preencha esse campo!";
    }
}

btnEnviar.addEventListener("click",verificaValores);