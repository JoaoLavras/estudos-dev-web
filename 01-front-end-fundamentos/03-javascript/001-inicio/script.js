var i = 2;

let a = 3;

const b = 2;

console.log("O valor de i  é: " + i);
console.log("O valor de a  é: " + a);
console.log("O valor de b é: " + b);

//codigo simples de verificação 

if(a!=undefined){
    console.log("a não é undefined ele é: " + a);
}
else {
    console.log("a é igual a: " + a)
}

//testes de tipagem
let numero = 5;
let numeroString = String(numero); //corrige o erro de tipagem 


console.log("1"+5); //acaba transformando em string o numero inteiro 5

console.log("1" + numeroString)
console.log("joao"+2);

//let numeroTeste = undefined;

function verifica(numeroTeste){
    return numeroTeste==0;
}

console.log(verifica(0));

let idades = [1,2,3]

for(var i=0; i < idades.length; i++){
    console.log(idades[i]);
}
