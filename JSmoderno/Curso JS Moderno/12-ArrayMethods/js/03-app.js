// Arreglo que contiene los productos del carrito, cada uno es un objeto con 'nombre' y 'precio'
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Variable que usaremos para acumular el precio total del carrito (versión con forEach)
let total = 0;

// Recorremos cada elemento del arreglo con forEach
// 'TProducto' representa cada objeto individual del arreglo 'carrito'
// En cada iteración accedemos a su propiedad 'precio' y la sumamos al total
carrito.forEach(TProducto => {
    total += TProducto.precio;
});

// Mostramos el total acumulado de todos los precios usando forEach
console.log(total);






// =================== Ahora usando un array method: reduce =================== //

// 'reduce' sirve para transformar un arreglo a un solo valor (por ejemplo, una suma total)

// reduce recibe dos parámetros:
// 1. Una función que recibe dos cosas: el acumulador (en este caso llamado 'total') y el elemento actual (aquí 'Producto')
// 2. El valor inicial del acumulador (en este caso 0)

let resultado = carrito.reduce((total, Producto) => {
    return total + Producto.precio;
}, 0);

// 🔄 El reduce va así:
// Empieza con total = 0.
// Primer producto: total = 0 + 500     → 500
// Segundo producto: total = 500 + 100  → 600
// Tercero: total = 600 + 200           → 800
// Cuarto: total = 800 + 300            → 1100
// Quinto: total = 1100 + 400           → 1500
// Sexto: total = 1500 + 700            → 2200
// Resultado final: 2200

// Mostramos el resultado acumulado de todos los precios usando reduce
console.log(resultado);
