//36. Crie um vetor com 10 números e exiba todos.
let vetor1 = [];

for (let i = 1; i <= 10; i++) {
    vetor1.push(i);
}

console.table(vetor1);


//37. Calcule a soma dos elementos do vetor.
let vetor2 = [];

for (let i = 1; i <= 10; i++) {
    vetor2.push(i);
}

let soma1 = 0;

for (let i = 0; i < vetor2.length; i++) {
    soma1 += vetor2[i];
}

console.log("-> Soma:", soma1);


//38. Calcule a média do vetor.
let vetor3 = [];

for (let i = 1; i <= 10; i++) {
    vetor3.push(i);
}

let soma2 = 0;

for (let i = 0; i < vetor3.length; i++) {
    soma2 += vetor3[i];
}

let media = soma2 / vetor3.length;

console.log("-> Média:", media);


//39. Encontre o maior valor do vetor.
let vetor4 = [5, 6, 9, 7, 4, 1];

let maior = vetor4[0];

for (let i = 0; i < vetor4.length; i++) {
    if (vetor4[i] > maior) {
        maior = vetor4[i];
    }
}

console.log("-> Maior valor:", maior);


//40. Encontre o menor valor do vetor.
let vetor5 = [5, 8, 9, 4, 7, 1, 10];

let menor = vetor5[0];

for (let i = 0; i < vetor5.length; i++) {
    if (vetor5[i] < menor) {
        menor = vetor5[i];
    }
}

console.log("-> Menor valor:", menor);


//41. Conte pares e ímpares.
let vetor6 = [12, 2, 31, 4, 259, 26, 7, 18, 9];

let pares = 0;
let impares = 0;

for (let i = 0; i < vetor6.length; i++) {
    if (vetor6[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("-> Pares:", pares);
console.log("-> Ímpares:", impares);


//42. Multiplique todos os elementos por 2.
let vetor7 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < vetor7.length; i++) {
    vetor7[i] *= 2;
}

console.table(vetor7);

