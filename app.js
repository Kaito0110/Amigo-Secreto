let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido e inténtalo otra vez.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nombre);

  input.value = "";
  input.focus();
  mostrarLista();
  limpiarResultado();
}

function mostrarLista() {
  let ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    ul.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero tienes que añadir al menos un nombre.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let elegido = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let li = document.createElement("li");
  li.textContent = "El amigo secreto sorteado es: " + elegido;
  resultado.appendChild(li);
}

function limpiarResultado() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}


