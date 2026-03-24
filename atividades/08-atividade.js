/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

let matriz = [
 [3, 5, 8],
 [1, 9, 2],
 [7, 1, 4],
]
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++)
        console.log("matriz[", linha, ",", coluna, "] =", matriz[linha][coluna]);
}

console.log("-----------------------------------------------------------")

/*Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.*/
console.table(matriz);

matriz = [3, 5, 8, 1, 9, 2, 7, 1, 4,];

console.log('------------------------')
for (let i = 0; i < matriz.length; i++) {
  matriz[i] *= 3; // numeros [i] = numeros [i] * 3
}
console.log(matriz)