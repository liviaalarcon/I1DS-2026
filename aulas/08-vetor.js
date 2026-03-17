// Criando variaveis do tipo Array (Vetor)

var dinos = ["Tiranosauro Rex", "Estegossauro", "Brontossauro", "Tricerátops"];

// Imprimindo os dados em forma de linha
console.log(dinos);
// Imprimindo os dados em forma de tabela
console.table(dinos);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", dinos.length, "elementos");

// Imprimindo Elementos a partir do índice
console.log(dinos[1]);

// push -> Adiciona um novo elemento no final da final
dinos.push("Anquilossauro");
console.log(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// Obter um Elemento a partir do ìndice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição:", dinos[20]);

//  pop -> Remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// shift -> Remover um elemento do inicio do vetor (primeiro elemento)
dinos.shift();
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// slipce -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indíce.
dinos.splice(1, 1); // Remove somente o segundo item da lista
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// Adicionar mais elemento ao vetor
dinos.push("Pterodáctilo");
dinos.push("Estegossauro");
dinos.push("Argentinossauro");

// Procurar um elemento a partir do nome (descrição)
// indexof(procurado) -> retorna o indice do elemento no vetor
let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no índice:", indice);
// indexOf(procurado) -> retorna -1 caso não encontre o elemento
procurado = "Líviassauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:",);


// Excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome
// 2º excluir o registro com base no indice retornado

procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do indice
dinos[1] = "Anquilossauro";
console.table(dinos);


// slice -> Criar uma cópia do Vetor
let novaLista = dinos.slice(); // Cópia completa do vetor dinos
console.table(novaLista);


