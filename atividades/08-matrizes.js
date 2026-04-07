/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************/

let matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.log("***************************************************************");
console.log("Dada a matriz abaixo, faça um programa em JavaScript\nque imprima os elementos da sua diagonal principal.\n| 3 5 8 |\n| 1 9 2 |\n| 7 1 4 |");
console.log("***************************************************************");

for (let i = 0; i < 3; i++) {
  console.table(matriz[i][i]);
}

/**************************************************** 
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
*****************************************************/
let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2],
];
let x = 2;

console.log("****************************************************");
console.log(
  "Dada a matriz abaixo, faça um programa em JavaScript\nque multiplique seus elementos por um valor x e imprima\na matriz antes e após a multiplicação.",
);
console.log("****************************************************");

console.table(matriz2);
for (let i = 0; i < matriz2.length; i++) {
  for (let j = 0; j < matriz2[i].length; j++) {
    matriz2[i][j] *= x;
  }
}

console.table(matriz2);