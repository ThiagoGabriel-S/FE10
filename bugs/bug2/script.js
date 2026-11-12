function apagarTema() {
  document.cookie = "tema=; max-age=0; path=/; Same-Site=Lax"  // ❌ BUG: falta max-age=0 e path=/
  document.getElementById("demo-tema-resultado").innerHTML =
    "Cookie tema apagado";
}

// Função separada para gravar (sem bug)
function gravarTemaParaApagar() {
  var valor = document.getElementById("demo-tema-apagar").value;
  document.cookie = "tema=" + encodeURIComponent(valor) + "; max-age=3600; path=/";
  document.getElementById("demo-tema-resultado").innerHTML =
    "Cookie tema " + valor + " gravado";
}