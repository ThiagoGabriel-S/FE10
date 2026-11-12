function gravarTema() {
  var valor = document.getElementById("tema").value;
  document.cookie = "tema=" + encodeURIComponent(valor) + "; max-age=3600; path=/";
  document.getElementById("demo-gravar-resultado").innerHTML = "Cookie tema " + valor + " gravado";
}