/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/

//criando uma variável com "var"
let nome = "Lívia";
let bank = "Nubank";
let agencia = "679329874";
let conta = "1537809";
let saldo = 100000

console.log("===========================================");
console.log("->                 NuBank                <-");
console.log("===========================================");
console.log("  Seja Bem-Vindo ", nome, "\n              ᕙ(⇀‸↼‶)ᕗ");
console.log("  Agência: ", agencia, "| Conta: ", conta);
console.log("  Seu Saldo atualmente é de: R$", saldo);
console.log("===========================================");

console.log("> Movimentações <");

// Movimentação 1
console.log(" |> Compra Aprovada!! de R$50,00.");
saldo = saldo - 50;
console.log("  |> Saldo: R$", saldo);

// Movimentação 2
console.log(" |> Compra Aprovada!! de R$69,95.");
saldo = saldo - 69.95;
console.log("  |> Saldo: R$", saldo);

// Movimentação 3
console.log(" |> Compra Aprovada!! de R$74,50.");
saldo = saldo - 74.5;
console.log("  |> Saldo: R$", saldo);

// Movimentação 4
console.log(" |> Compra Aprovada!! de R$85,69.");
saldo = saldo - 85.69;
console.log("  |> Saldo: R$", saldo);

// Movimentação 5
console.log(" |> PIX Recebido de R$150,00. (≧∇≦)");
saldo = saldo + 150;

// Reusltado Final
console.log("==========================================");
console.log("->    Seu saldo final é de R$", saldo, "   <-");
console.log("==========================================");
