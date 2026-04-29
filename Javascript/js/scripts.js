let contador = document.getElementById("contador");

const adicionar = () => {
  let valorAtual = parseInt(contador.innerHTML);
  //Aumenta o valor Atual em + 1
  valorAtual++;
  //Atualizar o valor do elemento <p> com id=contador
  contador.innerText = valorAtual;
};

const diminuir = () => {
  let valorAtual = parseInt(contador.innerHTML);
  //Diminui o valor Atual em - 1
  valorAtual--;
  //Atualizar o valor do elemento <p> com id=contador
  contador.innerText = valorAtual;
};

const zerar = () => {
  let valorAtual = parseInt(contador.innerHTML);
  //Diminui o valor Atual em - 1
  valorAtual = 0;
  //Atualizar o valor do elemento <p> com id=contador
  contador.innerText = valorAtual;
};

/* EXERCÍCIO 02*/
const mudarCor = () => {
  let cor = document.getElementById("colorPicker").value;
  // Capturar a cor selecionada pelo usuário

  // Buscar o elemento-alvo (quadrado)
  let quadrado = document.getElementById("quadrado");

  // Aplicar a cor ao elemento. (Alterar o css do background-color)
  quadrado.style.backgroundColor = cor;
};

/* EXERCICIO 03 */
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");


const somar = () => {
  let valor = parseFloat(num1.value) + parseFloat(num2.value)
  resultado.innerText = valor;
};

const subtrair = () => {
  let valor = parseFloat(num1.value) - parseFloat(num2.value)
  resultado.innerText = valor;
};

const multiplicar = () => {
  let valor = parseFloat(num1.value) * parseFloat(num2.value)
  resultado.innerText = valor;
};

const dividir = () => {
  let valor = parseFloat(num1.value) / parseFloat(num2.value)
  resultado.innerText = valor;
};
