//variables

let tabla = "users"

//Creacion Id

const ID = () => {
    return Math.random().toString(36).substr(2, 9)
}

console.log(ID());


const GetDataHTML = () => {

    id = ID();
    usuario = document.getElementById("nameInput").value;
    email = document.getElementById("emailInput").value;
    password1 = document.getElementById("passwordInput").value;
    password2 = document.getElementById("passwordInput2").value;
    checking = document.getElementById("termsCheck").checked;
     let alertRegister = document.getElementById("alertRegister")


    if (usuario != "" && email != "" && password1 != "" && password2 != "" && checking != false) {

        alertRegister.innerHTML = "REGISTER"

        if (password1 == password2) {
            console.log("registrado");

            PostApiRegister(id, usuario, email, password1, tabla);

            localStorage.setItem("DatoAPasar", btoa(id));

            localStorage.setItem("usuario", usuario);


            window.location.href = "index.html";

        } else {
            alertRegister.innerHTML = "Passwords don't match."
        }
    } else {
        alertRegister.innerHTML = "Empty fields are not permitted."
    }

}