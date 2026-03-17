//Comentário em linha

/*
   Comentário de várias linhas
   Bloco de código
*/
//Imprimir informações na tela
console.log("Imprime informações na tela");

/*  
   Declaração de variáveis
   Sintaxe: let tipo-variável = valor-variável;
   Exemplo: let idade = 45;
*/
/*
   Tipo dados primários:
   Numeros inteiros (Int) = 10
   Numeros decimais (double) = 8.53
   Caracteres AlfaNumeros (string) = "Cristiano"
   Numeros Booleanos (bool) = false;
*/

let idade = 45;
let salario = 25864.57;
let ehProfessor = false;
let nome = "João da Silva";

console.log("Olá ", nome, "Idade: ", idade, "Salário: ", salario);

/*
   Operadores Matematicos
   + -> Adição
   - -> Subtração
   * -> Multiplicação
   / -> Divisão
   % -> Resto da Divisão
*/

let num1 = 10;
let num2 = 2;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multipilcacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

// Imprimir as operações
console.log("Somando ", num1, " + ", num2, " = ", soma);
console.log("O Resto da Divisão do ", num1, " por ", num2, " = ", restoDivisao);

/* 
    Operadores de Comparação
    == -> Comparação de Igualdade
    != -> Diferente 
    >  -> Maior que
    <  -> Menor que 
    >= -> Maior ou Igualdade
    <= -> Menor ou Igual 
    
    Retorna 'true' ou 'false'  | Verdadeiro ou Falso
*/

console.log("O Numero 1 é igual ao Numero 2?", num1 == num2);
console.log("O Numero 1 é Maior ou Igual ao Numero 2?", num1 >= num2);
console.log("O Numero 1 é Menor que o Numero 2?", num1 < num2);

/*
     Operadores Lógicos 

     && (AND "E") -> Retorna verdadeiro se todas as clausulas forem verdadeiras
     || (OR "Ou") -> Retorna verdadeiro se ao uma das clausulas forem verdadeiras
     ! (NOT "Negação") -> Operador de Negação (Inverte o valor lógico)
*/

let sexo = "Feminino";
let idadeAluno = 17;

console.log(
  "È sexo Masculino ou tem 17 ou mais anos de idade? ",
  sexo == "Masculino" || idadeAluno >= 17,
);
console.log(
  "È sexo Masculino e tem 17 ou mais anos de idade? ",
  sexo == "Masculino" && idadeAluno >= 17,
);

// Concatenando strings (somando texto)

let n1 = "20";
let n2 = 10;

console.log(n1 + n2);
console.log("20" + n2);

var primeiroNome = "Lìvia";
var sobreNome = "Alarcon";

console.log(primeiroNome + sobreNome);
