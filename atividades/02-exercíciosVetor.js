// Criando variáveis do tipo Array (Vetor)

var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];

// Imprimindo os dados em forma de tabela
console.table(frutas);

// length Quantidade de elementos
console.log("O Vetor tem", frutas.length, "elementos");

// push -> Adicione um novo elemento no final da fila
frutas.push("tangerina");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
frutas.unshift("Goiaba");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// Obter um Elemento a partir do ìndice
console.log("5ª posição :", frutas[5]);

// slipce -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indíce.
frutas.splice(4, 1); // Remove somente o segundo item da lista
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// slice -> Criar uma cópia do Vetor
let novaLista = frutas.slice(2, 5);
console.table(novaLista);
console.log("O Vetor agora tem", frutas.length, "elementos");