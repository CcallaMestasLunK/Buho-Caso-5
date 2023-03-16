import { animacionDeCarga } from "../loader";
import { mostrarModal } from "../modal";
const productosContenedor = document.querySelector(".productos");
const btnCargarMas = document.querySelector(".agregar-productos");
export function pintarProductos(arr = []) {
    productosContenedor.innerHTML = ""; // limipiamos el contenedor de productos
    arr.forEach((element) => {// recorremos el array que recibimos como parametro y pintamos los productos en el contenedor
        productosContenedor.innerHTML += `
        <div class="item">
        <span class="loader"></span>
           <img src="${element.img}" alt="${element.info}" class="productos-img" data-id="${element.id}" />
           <p class="item-text">${element.info}</p>
        </div>
     `;
    });
}
export function cargarMasProductos(arr) {
    let start = 6;
    let contador = 1
    btnCargarMas.addEventListener("click", () => {
        start += 6;
        pintarProductos(arr.slice(0, start));
        animacionDeCarga()
        mostrarModal(arr)
        contador++
        btnCargarMas.textContent = `${contador}`
   
        if(start >= arr.length){
            btnCargarMas.style.display = "none"
        }
    })
 
 }