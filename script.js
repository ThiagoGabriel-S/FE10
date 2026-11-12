window.addEventListener("load", function() {
  var consentimento = getCookie("consentimento_lgpd");
  if (consentimento) {
    document.getElementById("banner").classList.add("oculto");
    atualizarPainel();
  }
});

function aceitarTodos() {
  document.cookie = "consentimento_lgpd=todos; max-age=31536000; path=/";
  document.cookie = "cat_analise=sim; max-age=31536000; path=/";
  document.cookie = "cat_marketing=sim; max-age=31536000; path=/";
  document.getElementById("banner").classList.add("oculto");
  atualizarPainel();
}

function aceitarApenasEssenciais() {
  document.cookie = "consentimento_lgpd=essenciais; max-age=31536000; path=/";
  document.cookie = "cat_analise=nao; max-age=31536000; path=/";
  document.cookie = "cat_marketing=nao; max-age=31536000; path=/";
  document.getElementById("banner").classList.add("oculto");
  atualizarPainel();
}

function salvarSelecao() {
  var analise = document.getElementById("chk-analise").checked ? "sim" : "nao";
  var marketing = document.getElementById("chk-marketing").checked ? "sim" : "nao";

  document.cookie = "consentimento_lgpd=custom; max-age=31536000; path=/";
  document.cookie = "cat_analise=" + analise + "; max-age=31536000; path=/";
  document.cookie = "cat_marketing=" + marketing + "; max-age=31536000; path=/";
  document.getElementById("banner").classList.add("oculto");
  atualizarPainel();
}

function reabrirPreferencias() {
  document.getElementById("banner").classList.remove("oculto");
}

function atualizarPainel() {
  var analise = getCookie("cat_analise") === "sim" ? "Ativo" : "Bloqueado";
  var marketing = getCookie("cat_marketing") === "sim" ? "Ativo" : "Bloqueado";

  document.getElementById("painel-status").innerHTML =
    "<p><strong>Essenciais:</strong> Sempre ativos</p>" +
    "<p><strong>Análise:</strong> " + analise + "</p>" +
    "<p><strong>Marketing:</strong> " + marketing + "</p>";
}

function getCookie(nome) {
  var match = document.cookie.match(new RegExp("(^| )" + nome + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}