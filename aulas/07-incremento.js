// Operadores de incremento e descremento | pré e pós incremento
// incremento => somar algo a alguma variável
// decremento => subtrair algo de alguma variável

let idade = 16;
console.log(idade);

// idade = idade + 1; // somei 1 na idade
idade++
console.log(idade);
idade++
console.log(idade);
console.log("----------------------------------")

// idade = idade -  1; // subtrai 1 na idade
idade--;
console.log(idade);
idade--;
console.log(idade);
console.log("----------------------------------")

let novaIdade = idade + 1;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);

novaIdade = idade++;
console.log("Idade:", idade, "| Nova Idade:", novaIdade);