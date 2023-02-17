window.onload = () => {
    let boxRed = document.getElementById('boxRojo');
    boxRed.addEventListener('click', fondoRojo);
    let boxOrange = document.getElementById('boxNaranjo');
    boxOrange.addEventListener('click', fondoNaranjo);
    let boxYellow = document.getElementById('boxAmarillo');
    boxYellow.addEventListener('click', fondoAmarillo);
    let boxGreen = document.getElementById('boxVerde');
    boxGreen.addEventListener('click', fondoVerde);
    let boxLightB = document.getElementById('boxCeleste');
    boxLightB.addEventListener('click', fondoCeleste);
    let boxPink = document.getElementById('boxRosado');
    boxPink.addEventListener('click', fondoRosado);

}
const fondoRojo = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: red')
    /* document.body.style.backgroundColor = "Red"; */
}
const fondoNaranjo = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: orange')
}
const fondoAmarillo = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: yellow')
}

const fondoVerde = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: green')
}

const fondoCeleste = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: lightskyblue');
}

const fondoRosado = () => {
    document.getElementById('cuadro').setAttribute('style', 'background-color: pink');
}