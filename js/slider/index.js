//slider
//creamos un objeto con las imagenes que queremos mostrar en el slider
const bannerImagenes = {
    0: "https://i.blogs.es/6d41e5/pc-gaming/1366_2000.jpeg",
    1: "https://errekgamer.com/wp-content/uploads/2020/07/91TsChyQSBL._SL1500_-1024x576-1.jpg",
    2: "https://citizenside.com/wp-content/uploads/2022/05/scorpio-tech-small-space-gaming-setup-scaled.jpg",
};
let i = 0; // i seria el iterador del slider para cambiar las imagenes si es 0 muestra la primera imagen de bannerImagenes[0], si es 1 muestra la segunda imagen de bannerImagenes[1] y asi sucesivamente
const nImagenes = Object.keys(bannerImagenes).length - 1; // obtenemos la cantidad de imagenes que tenemos en el objeto bannerImagenes
const banner = document.querySelector(".banner"); // seleccionamos el elemento con la clase banner
const btnSiguiente = document.querySelector("#siguiente"); // seleccionamos el elemento con el id siguiente ( Flecha derecha)
const btnAtras = document.querySelector("#atras");// seleccionamos el elemento con el id atras ( Flecha izquierda)

export function slider(){
    btnAtras.addEventListener("click", () => { // al dar click en el boton atras
        i--;// disminuimos el iterador si el iterador es 1 disminuimos a 0 y mostramos la primera imagen de bannerImagenes[0]
        if (i < 0) { // si el iterador es menor a 0
            i = nImagenes;// el iterador es igual a 2 y mostramos la ultima imagen de bannerImagenes[2]
        }
        banner.style.backgroundImage = `url(${bannerImagenes[i]})` // aqui cambiamos la imagen del slider;
    });
    // para el boton de siguiente es igual solo que aumentamos el iterador
    btnSiguiente.addEventListener("click", () => {
        i++;
        if (i > nImagenes) {
            i = 0;
        }
        banner.style.backgroundImage = `url(${bannerImagenes[i]})`;
    });
}