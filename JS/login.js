//variables

let tabla = "users"

//Obtener Datos HTML

const ObtenerDatosLogin = () => {

    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    CompararDatos(email, password);
}


const CompararDatos = (email, password) => {

    GetDB(tabla, id = "").then((data) => {


        data.map(function (element) {

            if (element.email == email && element.password == password) {

                console.log("Logeado")


                PatchUsuarioDB(tabla, element.id);

                localStorage.setItem("DatoAPasar", btoa(element.id));

                localStorage.setItem("usuario", element.usuario);

                window.location.href = "index.html";

            } else {
                console.log("DesLogeado")
            }



        })

    })

}

// ObtenerDatosLogin()