// Funcao sem retorno 
function imprimirSoma(a,b){
    console.log(a+b)


}

imprimirSoma(2,4)
imprimirSoma(3)
imprimirSoma(3,3,2,6,2)
imprimirSoma()


// funcao com retorno 
function soma(a,b =1){
    return a + b

}

console.log(soma(3,6));
console.log(soma(2));
console.log(soma());

