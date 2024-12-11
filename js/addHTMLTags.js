const header = document.querySelector("main");

header.innerHTML = "<h1>Nuevo texto agregado desde el java script</h1>";
header.insertAdjacentHTML(
  "beforeend",
  "<p>Se inserta un parrafo nuevo desde el java script</p>"
);
