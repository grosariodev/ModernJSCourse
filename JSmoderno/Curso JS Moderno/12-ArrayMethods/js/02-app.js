const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Esta es la forma para encontrar un dato en un array con un forEach
meses.forEach( (mes, index) =>{
    if(mes === "Abril"){
        console.log(`Se encontro en ${index}`)
    }
})

//Encontrar el indice de Abril
const In = meses.findIndex( (mes => mes === "Marzo"));
console.log(`Se encontro en el indice ${In}`);


if(In < 0){
    console.log("No se encuentra en el carrito")
}else{
    console.log("Si esta en el carrito")
}

//Encontrar un indice de un arreglo de objetos
const In2 = carrito.findIndex( (producto => producto.nombre === "Celular"))
console.log(In2)