```html
<script>
document.addEventListener("DOMContentLoaded", function () {
  const filtros = document.querySelector(
    "#vinicius-produtos .vinicius-filtros"
  );

  const menuLateral = document.querySelector(
    ".navegacao-secundaria"
  );

  if (!filtros || !menuLateral) return;

  // Guarda a posição original dos filtros
  const espaco = document.createElement("div");
  filtros.parentNode.insertBefore(espaco, filtros);

  // Ícones de cada categoria
  const icones = [
    "home-outline",
    "flash-outline",
    "shirt-outline",
    "flower-outline"
  ];

  // Transforma os links dos filtros em links com ícones
  const linksFiltros = filtros.querySelectorAll(
    ".vinicius-filtro-btn"
  );

  const linksLaterais = menuLateral.querySelectorAll(
    ".menu-link-navegacao-secundaria"
  );

  linksFiltros.forEach(function (link, indice) {
    if (!linksLaterais[indice]) return;

    // Mantém o destino original de cada categoria
    linksLaterais[indice].href = link.href;

    // Atualiza o ícone
    linksLaterais[indice].innerHTML =
      '<ion-icon name="' + icones[indice] + '"></ion-icon>';
  });

  function atualizarMenu() {
    const limite = espaco.getBoundingClientRect().top;

    if (limite < 20) {
      filtros.style.display = "none";
      menuLateral.style.display = "flex";
    } else {
      filtros.style.display = "";
      menuLateral.style.display = "";
    }
  }

  // Atualiza ao descer ou subir a página
  window.addEventListener("scroll", atualizarMenu);

  // Verifica a posição inicial
  atualizarMenu();
});
</script>
```