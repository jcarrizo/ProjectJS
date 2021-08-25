const botonesUI = document.getElementById("botones");
let IdElegido = localStorage.getItem("DatoAPasar");
let tablaUsuarios = "users";

console.log(IdElegido);

verificarLog(IdElegido, tablaUsuarios);


document.addEventListener("DOMContentLoaded");
