const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 300 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


let resultado = carrito.every( Producto => Producto.precio < 1000);
console.log(resultado);

let resultado2 = carrito.some( Producto => Producto.precio > 1000000);

if(resultado2 === true){
    console.log(
        "Si hay al menos 1"
    )
}else{
    console.log(
        "Olvidese de eso mio"
    )
}