const listaEmpleosUI = document.getElementById("listaEmpleos");
const botonesUI = document.getElementById("botones");
let IdElegido = localStorage.getItem("DatoAPasar");
let tablaUsuarios = "users";

verificarLog(IdElegido, tablaUsuarios);

//Cargar Cards de Empleos

//json-server --watch db.json

const CargarCards = () => {

    let Descripcion = "";
    Descripcion = document.getElementById("searchjobinput").value;

    console.log(Descripcion)

    listaEmpleosUI.innerHTML = "";

    fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(json => {

            json.forEach((element) => {

                console.log(element);


                if (element.nombreEmpresa == Descripcion || element.web == Descripcion || element.puesto == Descripcion || element.tipoPF == Descripcion) {

                    var image = new Image();
                    image.src = element.logoEmpresa;

                    if (element.tipoPF == "1") {
                        listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4  col-md-5" style="max-width: 100%;">
              <div class="row g-0">
                  <div class="col-md-4 mt-5">
                      <img src="${image.src}" class="img-fluid rounded-start p-2" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <div class="card-header bg-transparent border-primary">
                          ${element.nombreEmpresa}</div>
                          <div class="row col-6">
                              <b class="col-12 mt-2 mb-3">Titulo Puesto: ${element.puesto}</b>
                              <b class="col-12 mb-3">Tipo: Full-Time </b>
                              <b class="col-12 mb-3">Vacantes:${element.vacante} </b>
                          </div>
                          <div class="btn-group " role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-primary btn-lg">Aplicar</button>
                          </div>
                          <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div class="" style="width: 1%;"></div>`;
                    } else {
                        listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4  col-md-5" style="max-width: 100%;">
              <div class="row g-0">
                  <div class="col-md-4 mt-5">
                      <img src="${image.src}" class="img-fluid rounded-start p-2" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <div class="card-header bg-transparent border-primary">
                          ${element.nombreEmpresa}</div>
                          <div class="row col-6">
                              <b class="col-12 mt-2 mb-3">Titulo Puesto: ${element.puesto}</b>
                              <b class="col-12 mb-3">Tipo: Part-Time </b>
                              <b class="col-12 mb-3">Vacantes:${element.vacante} </b>
                          </div>
                          <div class="btn-group " role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-primary btn-lg">Aplicar</button>
                          </div>
                          <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div class="" style="width: 1%;"></div>`;
                    }


                }


                if (Descripcion == "") {

                    var image = new Image();
                    image.src = element.logoEmpresa;

                    if (element.tipoPF == "1") {
                        listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4  col-md-5" style="max-width: 100%;">
              <div class="row g-0">
                  <div class="col-md-4 mt-5">
                      <img src="${image.src}" class="img-fluid rounded-start p-2" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <div class="card-header bg-transparent border-primary">
                          ${element.nombreEmpresa}</div>
                          <div class="row col-6">
                              <b class="col-12 mt-2 mb-3">Titulo Puesto: ${element.puesto}</b>
                              <b class="col-12 mb-3">Tipo: Full-Time </b>
                              <b class="col-12 mb-3">Vacantes:${element.vacante} </b>
                          </div>
                          <div class="btn-group " role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-primary btn-lg" onclick="AplicarTrabajo('${element.id}')">Aplicar</button>
                          </div>
                          <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div class="" style="width: 1%;"></div>`;
                    } else {
                        listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4  col-md-5" style="max-width: 100%;">
              <div class="row g-0">
                  <div class="col-md-4 mt-5">
                      <img src="${image.src}" class="img-fluid rounded-start p-2" alt="...">
                  </div>
                  <div class="col-md-8">
                      <div class="card-body">
                          <div class="card-header bg-transparent border-primary">
                          ${element.nombreEmpresa}</div>
                          <div class="row col-6">
                              <b class="col-12 mt-2 mb-3">Titulo Puesto: ${element.puesto}</b>
                              <b class="col-12 mb-3">Tipo: Part-Time </b>
                              <b class="col-12 mb-3">Vacantes:${element.vacante} </b>
                          </div>
                          <div class="btn-group " role="group" aria-label="Basic outlined example">
                          <button type="button" class="btn btn-outline-primary btn-lg" onclick="AplicarTrabajo('${element.id}')">Aplicar</button>
                          </div>
                          <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                      </div>
                  </div>
              </div>
          </div>
        
          <div class="" style="width: 1%;"></div>`;
                    }

                }




            });
        })
};



const AplicarTrabajo = (Id) => {

    localStorage.setItem("DatoTrabajos", btoa(Id));

    window.open("screenJob.html")


}





document.addEventListener("DOMContentLoaded", CargarCards());
