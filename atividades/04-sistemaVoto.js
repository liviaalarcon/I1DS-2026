/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
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

console.log("============================================================");

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

// Verificação de aprovação

function vericacao(nota) {
  let frase;
  if (nota < 5) {
    frase = "REPROVADO!";
  } else if (nota > 5 && nota < 6.9) {
    frase = "RECUPERAÇÃO!";
  } else {
    frase = "APROVADO!";
  }
  return frase;
}

let nota = 3.5;
console.log("Você está: ", vericacao(nota));

// Outra opção 01

function verificarsituacao(nota) {
  if (nota < 5) {
    return "Reprovado";
  } else if (nota < 7) {
    return "Recuparação";
  } else {
    return "Aprovado";
  }
}

console.log(verificarsituacao(5));
console.log(verificarsituacao(8));

// Outra opção parte 02

function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1, +n2, +n3, +n4) / 4;

  if (nota > 5) {
    return "Reprovado";
  } else if (nota < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(situacaoFinal(9));

// OPÇÃO 3
function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

 if (media < 5) situacao = "Reprovado";
 else if (media < 7) situacao = "Recuperação";
 else situacao = "Aprovado";

  return "Média: " + media + " - situacao: " + situacao;
}

console.log(final(7, 8, 6, 5));

