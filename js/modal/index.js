import { obtenerDatos } from "../api/index.js";
const modal = document.querySelector(".modal-productos"); // seleccionamos el modal que se abrira al dar click en un producto

export function mostrarModal(arr) {
    const productosImg = document.querySelectorAll(".productos-img"); // seleccionamos todas las imagenes de los productos
    productosImg.forEach((e) => {// recorremos las imagenes de los productos
      e.addEventListener("click", () => { // cuando se de click en una imagen de producto
        modal.classList.add("modal-abierta"); // anadimos la clase modal-abierta al modal ( para que se muestre el modal )
        document.body.style.overflowY = "hidden" // anadimos el estilo overflowY: hidden al body para que no se pueda hacer scroll
        let id = e.getAttribute("data-id"); //obtenemos el id del producto
        mostrarDatosEnElModal(id,arr); // llamamos a la funcion que recibe un id y muestra los datos del producto en el modal
      });
    });
   
    modal.addEventListener("click", (event) =>{
      if(event.target === modal){
        modal.classList.remove("modal-abierta");
        document.body.style.overflowY = "scroll"
      }
    })
  }
  async function mostrarDatosEnElModal(id,arr) {
    //selecionamos los campos del modal nombre, precio, imagen y descripcion
    let productoNombre = document.querySelector(".info");
    let productoPrecio = document.querySelector(".precio");
    let productoImg = document.querySelector(".modal-img");
    let productoDescripcion = document.querySelector(".info-parrafo");
  
    //const productos = await obtenerDatos(); // llamamos a la funcion que obtiene los datos de la api
    let producto = arr.find((e) => e.id == id); // usamos el metodo find para buscar el producto que tenga el mismo id que el que recibimos como parametro. Esto nos devolvera un objeto con los datos del producto
    //para acceder a los datos de un objeto se utiliza el punto ( . ) y el nombre de la propiedad

  
    productoNombre.innerHTML = producto.info;
    productoPrecio.innerHTML = `s/${producto.precio}`;
    productoImg.src = producto.img;
    productoDescripcion.innerHTML = producto.descripcion;
  }
