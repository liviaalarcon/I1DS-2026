let userCount = 0;

const cadastrar = (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let lista = document.getElementById("lista"); 

  userCount++;
  let id = userCount;

  let novoItem = document.createElement("li");
  novoItem.setAttribute("data-id", id);

  novoItem.innerHTML = id + " - " + nome + " - " + email + 
  ` <button onclick="editar(${id})">Editar</button>
    <button onclick="excluir(${id})">Excluir</button>`;

  lista.appendChild(novoItem);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
}

const editar = (id) => {
  console.log("Editar:", id);
}

const excluir = (id) => {
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.getAttribute("data-id") == id) {
      item.remove();
    }
  });
}