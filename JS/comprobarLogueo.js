const verificarLog = (IdElegido, tablaUsuarios) => {

    //Verifica que el usuario este Logeado

    if (atob(IdElegido) == "ée" || atob(IdElegido) == "") {

        console.log("No estas logueado");

    } else {


        GetDB(tablaUsuarios, atob(IdElegido)).then((data) => {

            console.log(data)

            if (data.estado == "true") {

                console.log("Estas Logueado")

                botonesUI.innerHTML = `
            <div class="dropdown text-end row">
            <p class="fs-4 me-2 col-9 text-end " style = "color: white;"> ${data.usuario} </p>
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle col-2" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small col-4" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="abmJobs.html">Nuevo Empleo...</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" onclick="LogOut('${tablaUsuarios}')">Sign out</a></li>
          </ul>
        </div>`

                botonesTrabajo.innerHTML = ` <a type="button" id="heroButtonSearch" class="btnHero btn-lg" href="searchJobs.html">SEARCH</a>

                <a type="button" id="heroButtonCreate" class="btnHero btn-lg" href="abmJobs.html">OFFER JOB</a>`

                botonesTrabajo2.innerHTML = ` <a type="button" id="heroButtonSearch" class="btnHero btn-lg" href="searchJobs.html">SEARCH</a>

                <a type="button" id="heroButtonCreate" class="btnHero btn-lg" href="abmJobs.html">OFFER JOB</a>`

                // botonesTrabajo.innerHTML = `<a href="busquedaTrabajo.html"> <button type="button" class="btn btn-outline-primary me-2">Buscar
                // Empleo</button></a>

                // <a href="abm.html"> <button type="button" class="btn btn-primary">Crear Empleo</button></a>`

            } else {

                console.log("Incorrrecto");
            }

        })
    }
}



//Funcion para deslogearse

const LogOut = (tablaUsuarios) => {

    let Id = localStorage.getItem("DatoAPasar");

    LogOutDB(tablaUsuarios, atob(Id));

    localStorage.setItem("DatoAPasar", "");
    localStorage.setItem("usuario", "");

    window.location.reload();

}