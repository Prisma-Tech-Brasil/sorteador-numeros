const numsSorteados = [];
const btnReiniciar = buscarPeloId("btn-reiniciar");

function manuseiaEstilosDoBotao() {
  if (numsSorteados.length > 0) {
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
  } else {
    btnReiniciar.classList.remove("container__botao");
    btnReiniciar.classList.add("container__botao-desabilitado");
  }
}

function buscarPeloId(nomeDoId) {
  return document.getElementById(nomeDoId);
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) + 1;
}

function sortear() {
  const qtsNumSortear = buscarPeloId("quantidade").value;
  const de = buscarPeloId("de").value;
  const ate = buscarPeloId("ate").value;

  if (!qtsNumSortear || !de || !ate) {
    alert("Todos inputs devem ter números válidos");
    return;
  }


  for (let i = 0; i < qtsNumSortear; i++) {
    const numAleatorio = gerarNumeroAleatorio(de, ate);

    numsSorteados.push(numAleatorio);
  }

  mostrarResultado();
  manuseiaEstilosDoBotao();
}

function mostrarResultado() {
  const resultado = buscarPeloId("resultado");
  resultado.innerHTML = `<p class="texto__paragrafo">
    ${numsSorteados.join(", ")}
  </p>`;
}

function reiniciar() {
  numsSorteados.length = 0;
  mostrarResultado();
  manuseiaEstilosDoBotao();
}
