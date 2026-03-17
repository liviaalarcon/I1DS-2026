//1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.

function nasci(dataNascimento) {
  let idade = 2026 - dataNascimento;
  return idade;
}

console.log("-----------------------------------------");
console.log("->              SUA IDADE              <-");
console.log("-----------------------------------------");
console.log(" |> Você irá fazer", nasci(2009), "anos.");


/*
2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode 
viajar com esse combustível. Considere que o veículo faz uma média de 12 Km/L.

*/

function kms(combustivel) {
  let veiculo = combustivel * 12;
  return veiculo;
}

console.log("-----------------------------------------");
console.log("->      CALCULADOR DE KILOMETROS       <-");
console.log("-----------------------------------------");
console.log(" |>Seu carro pode viajar", kms(50), "Km");



