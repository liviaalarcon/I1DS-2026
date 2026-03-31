// Dado um vetor, calcule e exibe a quantidade de pares e ímpares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let par = 0;
let impar = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) par++;
  else impar++;
}

console.log("Quantidade de pares:", par);
console.log("Quantidade de impar:", impar);

// Dado o vetor, multiplique todos os seus elementos por 3
console.table(numeros);

for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3; // numeros [i] = numeros [i] * 3
}
console.log(numeros)

// Dada uma matriz 2x3 imprima todos od seus elementos com as respectivas posiçoes
let matriz = [
    [8, 4, 1],
    [3, 7, 8],
]
console.table(matriz)

for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[0].length; coluna++) 
        console.log("Matriz[", linha, ",", coluna, "] =", matriz[linha][coluna])
}