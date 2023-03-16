export function animacionDeCarga() {
    const todasImagenesProductos = document.querySelectorAll(".productos-img"); // seleccionamos todas las imagenes de los productos
    todasImagenesProductos.forEach((img) => { // recoorremos todas las imagenes de los productos
      img.style.display = "none"; // a la imagen le anadimos display none ( para que no se vea )
      img.nextElementSibling.style.display = "none"; // a texto le anadimos display none ( para que no se vea )
      img.parentElement.style.height = "400px"; //al padre le damos una altura 
      img.parentElement.firstElementChild.style.display = "flex"; // mostramos el loader ( el circulo de carga )
  
      img.addEventListener("load", () => { // cuando la imagen cargue por completo
        img.style.display = "block"; // le damos un display block a la imagen para que se vea
        img.nextElementSibling.style.display = "block"; // le damos un display block al texto para que se vea
        img.parentElement.style.height = "auto"; //al padre le damos una altura automatica ( para que se ajuste al contenido )
        img.parentElement.firstElementChild.style.display = "none"; // ocultamos el loader
      });
    });
  }