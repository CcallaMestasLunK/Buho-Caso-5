import { slider } from "./slider/index.js";
import { obtenerDatos } from "./api/index.js";
import { pintarProductos } from "./products/index.js";
import { animacionDeCarga } from "./loader/index.js";
import { mostrarModal } from "./modal/index.js";
import { cargarMasProductos } from "./products/index.js";

window.addEventListener("load", async () =>{
    const productos = await obtenerDatos();
    slider();
    pintarProductos(productos.slice(0, 6));
    animacionDeCarga();
    mostrarModal(productos);
    cargarMasProductos(productos);
})
