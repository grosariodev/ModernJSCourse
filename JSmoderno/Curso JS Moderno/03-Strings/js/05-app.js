const producto = "Monitor 24 pulgadas";

// .replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));


// .slice para recortar
console.log(producto.slice(0, 10));

// No puedes poner un numero mayor al inicio que el siguiente, EN SLICE:
console.log(producto.slice(2,1));


// ALTERNATIVA A SLICE
// SUBSTRING SI PERMITE PONER UN NUMERO MAYOR AL INICIO A DIFERENCIA DE SLICE:
console.log(producto.substring(2,1));


// Ejemplo practico: Cuando estas en gmail puedes ver que aparece una esfera con tu inicial arriba a la derecha. Se hace de esta forma.
const usuario = "Gabriel";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));