const validar = (nombre, asunto, mensaje) => {
    let validacionn = /[a-zA-Z]\w+/gim;
    let bandera = true;
    if (validacionn.test(nombre) == false || nombre == "") {
        document.querySelector(".errorNombre").innerHTML = "El Nombre es Requerido"
        bandera = false;
    };

    if (validacionn.test(asunto) == false || asunto == "") {
        document.querySelector(".errorAsunto").innerHTML = "El Asunto es Requerido"
        bandera = false;
    };

    if (validacionn.test(mensaje) == false || mensaje == "") {
        document.querySelector(".errorMensaje").innerHTML = "El Mensaje es Requerido"
        bandera = false;
    };

    return bandera;
};

const limpiar = () => {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
    document.querySelector(".resultado").innerHTML = "";
};

window.onload = () => {

    let form = document.getElementById("formulario");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        limpiar();
        let nombre = document.getElementById("nombre").value;
        let asunto = document.getElementById("asunto").value;
        let mensaje = document.getElementById("mensaje").value;

        let validado = validar(nombre, asunto, mensaje);
        if (validado == true) {
            document.querySelector(".resultado").innerHTML = "Mensaje Enviado con Exito!!!"
        }
    });
};

