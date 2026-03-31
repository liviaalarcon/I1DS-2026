//26. Exiba números de 1 a 100.
console.log("Vai COMEÇAR!!...");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

console.log("FIM!!");


//27. Exiba números de 100 até 1.
console.log("De 100 até 1:");

for (let i = 100; i >= 1; i--) {
    console.log(i);
}


//28. Exiba apenas números pares de 1 a 50.
console.log("Números pares de 1 a 50:");

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}


//29. Exiba apenas números ímpares de 1 a 50.
console.log("Números ímpares de 1 a 50:");

for (let i = 1; i <= 50; i += 2) {
    console.log(i);
}


//30. Calcule a soma de 1 até 100.
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("A soma de 1 até 100 é:", soma);


//31. Calcule o fatorial de um número.
let numFatorial = 5;
let resultadoFatorial = 1;

for (let i = numFatorial; i > 0; i--) {
    resultadoFatorial *= i;
}

console.log("Fatorial de", numFatorial, "=", resultadoFatorial);


//32. Exiba a tabuada de um número.
let num = 5;

console.log("Tabuada do", num);

for (let i = 1; i <= 10; i++){
    let resultado = num * i;
    console.log(num, "x", i, "=", resultado);
}


//33. Conte quantos números pares existem entre 1 e 100.
let contador = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}

console.log("Quantidade de números pares entre 1 e 100:", contador);


//34. Exiba todos os múltiplos de 5 entre 0 e 100.
console.log("Múltiplos de 5 entre 0 e 100:");

for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}


//35. Desenhe no console:
/*
*
**
***
****
*****
*/

console.log("Desenho:");

let estrela = "";

for (let i = 1; i <= 5; i++) {
    estrela += "*";
    console.log(estrela);
}
