const listaEmpleoUI = document.getElementById("Formulario");
let IdElegido = localStorage.getItem("DatoAPasar");
const botonesUI = document.getElementById("botones");
const botonesChangeUI = document.getElementById("buttonAplyChange");
let tablaUsuarios = "users";

verificarLog(IdElegido, tablaUsuarios);


const CargarCards = () => {


  listaEmpleoUI.innerHTML = "";

  let IdElegido = localStorage.getItem("DatoTrabajos");

  console.log(atob(IdElegido));

  fetch(`http://localhost:3000/jobs/${atob(IdElegido)}`)
    .then(response => response.json())
    .then(json => {

      var image = new Image();
      image.src = json.logoEmpresa;


      if (json.tipoPF == "1") {
        listaEmpleoUI.innerHTML = `
         
        <section class="row employmentScreen" id="Formulario">
                <section class="jobDescription col-lg-6 col-12">
                  <h4 id="job">Position: ${json.puesto}</h4>
                  <h3>Description</h3>
                  <div data-bs-spy="scroll" data-bs-offset="0" class="scrollspy" tabindex="0">
                    <p id="description">${json.descripcion} </p>
                  </div>
                  <section class="buttonAply" id="buttonAplyChange">
                    <button type="button" onclick="ApplyChange()" id="applybtn" class="btn btn-outline-primary">APPLY!</button>
     
                  </section>
                </section>
                <section class="businessInfo col-lg-3 col-12">
                  <p>WORK SUMMARY</p>
                  <img src="${image.src}" id="imageEmpresas">
                  <h4 id="nameCompany">${json.nombreEmpresa}</h4>
                  <ul>
                    <li id="date">Date: ${json.tiempo}</li>
                    <li id="type">Time: Full-Time</li>
                    <li id="vacancies">Vacancy: ${json.vacante}</li>
                    <li id="category">Category: I.T </li>
                    <li id="web">Web: ${json.web}</li>
                  </ul>
                  
                </section>
              </section>`
      } else {
        listaEmpleoUI.innerHTML = ` <section class="row employmentScreen" id="Formulario">
                <section class="jobDescription col-lg-6 col-12">
                  <h4 id="job">Position: ${json.puesto}</h4>
                  <h3>Description</h3>
                  <div data-bs-spy="scroll" data-bs-offset="0" class="scrollspy" tabindex="0">
                    <p id="description">${json.descripcion} </p>
                  </div>
                  <section class="buttonAply" id="buttonAplyChange">
                    <button type="button" onclick="ApplyChange()" id="applybtn" class="btn btn-outline-primary">APPLY!</button>              
                  </section>
                </section>
                <section class="businessInfo col-lg-3 col-12">
                  <p>WORK SUMMARY</p>
                  <img src="${image.src}" id="imageEmpresas">
                  <h4 id="nameCompany">${json.nombreEmpresa}</h4>
                  <ul>
                    <li id="date">Date: ${json.tiempo}</li>
                    <li id="type">Time: Full-Time</li>
                    <li id="vacancies">Vacancy: ${json.vacante}</li>
                    <li id="category">Category: I.T </li>
                    <li id="web">Web: ${json.web}</li>
                  </ul>
                </section>
              </section>`
      }

    })
};



document.addEventListener("DOMContentLoaded", CargarCards());