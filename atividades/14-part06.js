//43. Crie uma matriz 3x3 e exiba todos os valores.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log("Posição [", i, ",", j, "] =", matriz[i][j]);
        
    }
}




//44. Exiba a diagonal principal de uma matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (l == c) {
            console.log(matriz[l][c]);
        }
    }
}



//45. Exiba a diagonal secundária.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (l + c === 2) {
            console.log(matriz[l][c]);
        }
    }
}




//46. Some todos os elementos da matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let soma = 0;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        soma += matriz[l][c];

    }
}

console.log("-------------------------------------------------");
console.log("-> A soma de todos os valores da Matriz é:", soma);
console.log("-------------------------------------------------");




//47. Encontre o maior valor da matriz.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let maior = matriz[0][0];

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (matriz[l][c] > maior) {
            maior = matriz[l][c]
        }
    }
}

console.log("------------------------------------");
console.log("-> O maior valor é o número:", maior);
console.log("------------------------------------");





//48. Multiplique todos os valores por um número X.

var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.table(matriz);

let x = 2;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        matriz[l][c] *= x;

    }
}

console.table(matriz);




//49. Conte quantos valores são maiores que 10.

var matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18],
];
console.table(matriz);
let contador = 0;

for (let l = 0; l < matriz.length; l++) {
    for (let c = 0; c < matriz[l].length; c++) {
        if (matriz[l][c] > 10) {
            contador++;
        }
    }
}

console.log("-------------------------------------------------------------");
console.log("-> O total de Números que são maiores do que 10 é:", contador);
console.log("-------------------------------------------------------------");




/****************************************
50. Crie uma matriz e exiba no formato:
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]
*****************************************/

var matriz = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18],
];
console.table(matriz);

let acumulador = 0;

for (let l = 0; l < matriz.length; l++) {
    let linha = "[ ";
    for (let c = 0; c < matriz[l].length; c++) {
        linha = linha + matriz[l][c] + " ";
    }
    linha = linha + "]";
    console.log(linha);
}