"use strict";

const producto = {
    nombre: "Monito 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal(producto);

producto.nombre = 333333;

console.log(producto);

console.log(Object.isFrozen(producto));