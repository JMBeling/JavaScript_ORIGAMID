// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var soma = "Qual seu 10" / 10;
console.log(soma);
console.log(isNaN(soma));

var soma2 = "Qual seu 100" % 1000;
console.log(soma2);
console.log(isNaN(soma2));

//Somar a string "200" com o número 50 e retornar 250
var soma3 = "200";
var soma4 = 50;
console.log(+soma3 + soma4);

//Incremente o número 5 e rotorne o seu valor incrementado
var numero = 5;
console.log(++numero);

//Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = peso / 2;
console.log(peso);
console.log(pesoPorDois);

var peso2 = numero / 2;
console.log(peso2);
var pesoFinal = peso2 + unidade;
console.log(pesoFinal);
