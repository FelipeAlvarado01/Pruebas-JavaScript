const input = document.querySelector("input");

input.value = "Apellido"; //Modificacion del value del input a partit de la propiedad value

const title = document.querySelector("#title");
console.dir(title); //Acceso a todas las propiedades de la etiqueta

title.textContent = "Nuevo texto "; //Me modifica el texto del h1 con id="tilte"
title.innerText = "Texto con la propiedad innerText";

title.style.color = "red";

const menu = document.querySelector("menu");

menu.style.backgroundColor = "aqua"; //Reescribe el estilo que ya tenia la etiqueta
menu.style.fontSize = "20px";

menu.className = "main-menu";

console.log(document);
