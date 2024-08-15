// Buscar botão reiniciar pelo id

function manuseiaEstilosDoBotao() {
  if (numsSorteados.length > 0) {
    btnReiniciar.classList.remove("container__botao-desabilitado");
    btnReiniciar.classList.add("container__botao");
  } else {
    btnReiniciar.classList.remove("container__botao");
    btnReiniciar.classList.add("container__botao-desabilitado");
  }
}
