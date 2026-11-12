function lerCookies() {
  var atual = document.cookie;
  document.getElementById("demo-ler").innerHTML =
    atual ? "Cookies: " + atual : "(nenhum cookie)";
}