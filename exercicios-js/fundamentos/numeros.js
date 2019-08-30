const peso1 = 1.0;
const peso2 = Number('2.0')

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.4223
const avaliacao2 = 7.0948

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total /(peso1+peso2)

console.log('Teste de media',media.toFixed(4));
console.log('Teste de total',total.toString());
console.log(typeof media);
console.log(typeof total);


console.log(typeof Number );


