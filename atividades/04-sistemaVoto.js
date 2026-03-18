// Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo se ela pode votar ou não,e se o voto é obrigatório ou opcional


// Desvio Condicional - IF-ELSE

/* Condiçoes simples com IF
 Sintaxe: if( condição ){ codigo a ser executadp, se verdadeiro,}
 */
function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));

console.log("================================================")


/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/
function vericacao(nota) {
  let frase;
  if (nota < 5) {
    frase = "REPROVADO!!";
  } else if (nota > 5 && nota < 6.9) {
    frase = "RECUPERAÇÃO";
  } else {
    frase = "APROVADO!!";
  }
  return frase;
}

let nota = 7;
console.log("Você está: ", vericacao(nota));