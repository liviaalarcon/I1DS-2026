/* PARTE 2 – Condicionais (IF) (11 a 20)
11. Verifique se um número é positivo, negativo ou zero.
12. Verifique se um número é par ou ímpar.
13. Dado um número, verifique se é múltiplo de 3.
14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5)
15. Verifique se uma pessoa pode votar (use regras reais).
16. Verifique se um número está entre 10 e 50.
17. Crie um sistema de login simples (usuário e senha).
18. Verifique o maior entre dois números.
19. Verifique o maior entre três números.
20. Classifique a idade:
       Criança
       Adolescente
       Adulto
       Idoso */

// 11. Verifique se um número é positivo, negativo ou zero.
let numero = -5;
if (numero > 0) {
  console.log("O número é positivo.");
}

if (numero < 0) {
  console.log("O número é negativo.");
}
if (numero == 0) {
  console.log("O número é zero.");
}
console.log("--------------------------------------------------------");

//12. Verifique se um número é par ou ímpar.
let numero2 = 5;
if (numero2 % 2 == 0) {
  console.log("Este número é par!");
} else {
  console.log("Este número é impar!");
}

console.log("---------------------------------------------------------");

//13. Dado um número, verifique se é múltiplo de 3.
let numero3 = 15;

if (numero3 % 2 == 1) {
  console.log("Este número é múltiplo de 3");
} else {
  console.log("Este número não é múltiplo de 3!");
}

console.log("---------------------------------------------------------");

/*14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5)*/
let notas = 4;
if (notas >= 7) {
  console.log("O aluno foi aprovado!");
}

if (notas >= 5 || notas > 7) {
  console.log("O aluno está de recuperação!");
}
if (notas < 5) {
  console.log("O aluno está reprovado!");
}

console.log("----------------------------------------------------------");

//15. Verifique se uma pessoa pode votar (use regras reais).
let idade = 19;

if (idade >= 18 && idade <= 70) {
  console.log("---------------------------");
  console.log(" Seu Voto é OBRIGATORIO!!");
  console.log("---------------------------");
} else if (idade >= 16 || idade >= 70) {
  console.log("--------------------------------------");
  console.log(" Seu voto é FACULTATIVO!!(OPCIONAL).");
  console.log("--------------------------------------");
} else {
  console.log("------------------------------");
  console.log(" Você ainda NÃO pode Votar!!");
  console.log("------------------------------");
}

//16. Verifique se um número está entre 10 e 50.
let num = 74;

if (num >= 10 && num <= 50) {
  console.log("-----------------------------------------");
  console.log(" O número", num, "ESTÁ entre 10 e 50!");
  console.log("-----------------------------------------");
} else {
  console.log("--------------------------------------------");
  console.log(" O número", num, "NÃO ESTÁ entre 10 e 50");
  console.log("--------------------------------------------");
}

// 17. Crie um sistema de login simples (usuário e senha).
login = "admin";
const senha = "54321";

let loginUser = "admin";
let senhaUser = "54321";

if (loginUser == login && senhaUser == senha) {
  console.log("Login Realizado com Sucesso!");
} else {
  console.log("Acesso Negado!!");
}

console.log("------------------------------------------------------------");

//18. Verifique o maior entre dois números.

let num1 = 16;
let num2 = 16;

if (num1 > num2) {
  console.log("------------------------------------------");
  console.log(" O número", num1, "é maior que", num2);
  console.log("------------------------------------------");
} else if (num1 == num2) {
  console.log("--------------------------");
  console.log(" Os números são IGUAIS!!");
  console.log("--------------------------");
} else {
  console.log("------------------------------------------");
  console.log(" O número", num2, "é maior que", num1);
  console.log("------------------------------------------");
}

//19. Verifique o maior entre três números.

let numer1 = 16;
let numer2 = 15;
let numer3 = 14;

if (numer1 > numer2 && numer1 > numer3) {
  console.log("----------------------------------------------");
  console.log(" O número", numer1, "é maior que", numer2, "e", numer3);
  console.log("----------------------------------------------");
} else if (num2 > num1 && num2 > num3) {
  console.log("----------------------------------------------");
  console.log(" O número", numer2, "é maior que", numer1, "e", numer3);
  console.log("----------------------------------------------");
} else if (num3 > num1 && num3 > num2) {
  console.log("----------------------------------------------");
  console.log(" O número", numer3, "é maior que", numer1, "e", numer2);
  console.log("----------------------------------------------");
} else {
  console.log("---------------------------------");
  console.log(" Os números são IGUAIS !");
  console.log("---------------------------------");
}

//20. Classifique as idades de idoso, adolecente, crianca e adulto
let age = 15;

if (age >= 60) {
  console.log("------------------------------------");
  console.log(" Você é classificado como: Idoso!");
  console.log("------------------------------------");
} else if (age >= 18) {
  console.log("-------------------------------------");
  console.log(" Você é classificado como: Adulto!");
  console.log("-------------------------------------");
} else if (age >= 17) {
  console.log("------------------------------------------");
  console.log(" Você é classificado como: Adolecente!");
  console.log("------------------------------------------");
} else if (age >= 12) {
  console.log("--------------------------------------");
  console.log("-> Você é classificado como: Criança!");
  console.log("--------------------------------------");
}
