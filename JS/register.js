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
     let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/


    if (usuario != "" && email != "" && password1 != "" && password2 != "" && checking != false) {

        alertRegister.innerHTML = "REGISTER"

        if (usuario.lenght <6){
            alertRegister.innerHTML = "User is too short"
        }

        if (!regexEmail.test(email)) {
            alertRegister.innerHTML = "Email is invalid"
        }

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