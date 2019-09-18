let valor 
console.log(valor );

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 44.2
console.log(produto);
console.log(!!produto.preco); // se tiver valor retorna true

produto.preco = undefined
console.log(!!produto.preco); // se nao tiver valor irá retornar false
// delete produto.preco
console.log(produto);

produto.preco = null // sem preço 
console.log(!!produto.preco);
console.log(produto);










