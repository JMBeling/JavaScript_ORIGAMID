//Valores Boolean
var possuiGraduacao = true;
var possuiDoutorado = false;
console.log(possuiGraduacao);
console.log(possuiDoutorado);

//Condicional If e Else
var possuiGraduacao = true;
if (possuiGraduacao) {
  console.log("Possui graduação");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui");
}

// Valores que retornam False
var nome = "";
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

var corFavorita = "Azul";
//SWITCH
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Amarelo":
    console.log("Olhe para o sol");
    break;
  case "Verde":
    console.log("Olhe para a floresta");
    break;
  default:
    console.log("Feche os olhos");
}
