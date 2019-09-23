// Armazenando uma funcao dentro de uma variavel 
const imprimirSoma = function (a,b){
    console.log('function',a + b);
    
}
imprimirSoma(2,5)

// Armazenando uma funcao dentro de uma variavel 

const soma = (a,b) => {
    return a+ b
}

console.log('}  =>',soma(2,3));



// retorno implicito 

const  subtracao = (a, b) => a - b

console.log('=>',subtracao (2,4));


const imprimir2 = a => console.log(a);

imprimir2('teste!!! S')
