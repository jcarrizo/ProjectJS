//Declaracion de variables
const formularioUI = document.getElementById("formulario");
const listaEmpleosUI = document.getElementById("listaEmpleos");
let tablaUsuarios = ""
let IdElegido = localStorage.getItem("DatoAPasar");
document.getElementById("nameUsuario").innerHTML = localStorage.getItem("usuario");

let datoId = "";



//Funcion para obtener Fecha y Hora

const FechaHora = () => {
    let hoy = new Date();
    let fecha =
        hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();

    let hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();

    let fechaYHora = fecha + " " + hora;

    return fechaYHora;
};


//Creacion de ID Unico

const ID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
};


//Cargar Cards de Empleos

//json-server --watch db.json

const CargarCards = () => {
    listaEmpleosUI.innerHTML = "";

    fetch('http://localhost:3000/jobs')
        .then(response => response.json())
        .then(json => {

            json.forEach((element) => {


                var image = new Image();
                image.src = element.logoEmpresa;

                if (element.tipoPF == "1") {
                    listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4 col-5" style="max-width: 100%;">
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
                          <button type="button" class="btn btn-outline-primary btn-lg" onclick="CargarFormulario('${element.id}')">Editar</button>
                          <button type="button" class="btn btn-outline-danger btn-lg" onclick="EliminarAPI('${element.id}')">Eliminar</button>
                      </div>
                      <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                  </div>
              </div>
          </div>
      </div>
    
      <div class="" style="width: 1%;"></div>`;
                } else {
                    listaEmpleosUI.innerHTML += `<div class="card border-primary text-dark bg-light mb-4 col-5" style="max-width: 100%;">
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
                          <button type="button" class="btn btn-outline-primary btn-lg" onclick="CargarFormulario('${element.id}')">Editar</button>
                          <button type="button" class="btn btn-outline-danger btn-lg" onclick="EliminarAPI('${element.id}')">Eliminar</button>
                      </div>
                      <p class="card-text"><small class="text-muted">${element.tiempo}</small></p>
                  </div>
              </div>
          </div>
      </div>
    
      <div class="" style="width: 1%;"></div>`;
                }
            });
        })
};

//Cargar Elemento a la API

const PostApi = (NombreEmpresa, Web, Imagen, Puesto, Tipo, Vacante, Descripcion) => {

    var file = Imagen[0];

    var reader = new FileReader();
    reader.onloadend = function () {

        let _data = {
            id: ID(),
            nombreEmpresa: NombreEmpresa,
            web: Web,
            logoEmpresa: reader.result,
            puesto: Puesto,
            tipoPF: Tipo,
            vacante: Vacante,
            descripcion: Descripcion,
            tiempo: FechaHora()
        }

        fetch('http://localhost:3000/jobs', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.log(err));



    }

    reader.readAsDataURL(file);

    CargarCards();
}


//Eliminar Elemento de la API

const EliminarAPI = (id) => {

    fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'DELETE'
    });

};




//Cargar Formulario Para Editar


const CargarFormulario = (id) => {

    fetch(`http://localhost:3000/jobs/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            datoId = id;
            document.getElementById("NombreEmpresa").value = json.nombreEmpresa;
            document.getElementById("Web").value = json.web;
            document.getElementById("Puesto").value = json.puesto;
            document.getElementById("Tipo").value = json.tipoPF;
            document.getElementById("Vacante").value = json.vacante;
            document.getElementById("Descripcion").value = json.descripcion;
        });

};



//Editar elemento de la API

const EditarAPI = (ID, NombreEmpresa, Web, Imagen, Puesto, Tipo, Vacante, Descripcion) => {


    if (Imagen[0] == undefined) {

        // console.log(datoId);
        fetch(`http://localhost:3000/jobs/${ID}`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: ID,
                nombreEmpresa: NombreEmpresa,
                web: Web,
                puesto: Puesto,
                tipoPF: Tipo,
                vacante: Vacante,
                descripcion: Descripcion,
                tiempo: FechaHora()
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))

    } else {
        var file = Imagen[0];
        var reader = new FileReader();
        reader.onloadend = function () {

            // console.log(datoId);
            fetch(`http://localhost:3000/jobs/${ID}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    id: ID,
                    nombreEmpresa: NombreEmpresa,
                    web: Web,
                    logoEmpresa: reader.result,
                    puesto: Puesto,
                    tipoPF: Tipo,
                    vacante: Vacante,
                    descripcion: Descripcion,
                    tiempo: FechaHora()
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => console.log(json))

        }
        reader.readAsDataURL(file);
    }

};


//Obtiene la informacion del HTML

formularioUI.addEventListener('submit', (e) => {

    e.preventDefault();

    // let Id = document.getElementById("Id").innerHTML;
    let NombreEmpresa = document.getElementById("NombreEmpresa").value;
    let Web = document.getElementById("Web").value;
    let Imagen = document.getElementById("InputFile").files;
    let Puesto = document.getElementById("Puesto").value;
    let Tipo = document.getElementById("Tipo").value;
    let Vacante = document.getElementById("Vacante").value;
    let Descripcion = document.getElementById("Descripcion").value;


    console.log(datoId);
    if (datoId == "") {
        PostApi(NombreEmpresa, Web, Imagen, Puesto, Tipo, Vacante, Descripcion);
    } else {

        EditarAPI(datoId, NombreEmpresa, Web, Imagen, Puesto, Tipo, Vacante, Descripcion);
    }

    datoId = "";

    formularioUI.reset();

});



document.addEventListener("DOMContentLoaded", CargarCards());
