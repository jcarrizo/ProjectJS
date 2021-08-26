
//Variables

let url = "http://localhost:3000"



//Get a la DB

const GetDB = async (tabla, id) => {
    const result = await fetch(`${url}/${tabla}/${id}`);
    const data = await result.json();

    return data;
};


//Post de Usuarios a la DB

const PostApiRegister = async (idTxt, usuarioTxt, emailTxt, passwordTxt, tabla) => {

    let data = {

        id: idTxt,
        usuario: usuarioTxt,
        email: emailTxt,
        password: passwordTxt,
        estado: "true"
    }

    await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}




//Cambia el estado del usuario a True
const PatchUsuarioDB = async (tabla, id) => {

    await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            estado: "true",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

}



//Cambia el estado del Usuario a False

const LogOutDB = async (tabla, id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify({
            estado: "false",
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
};

