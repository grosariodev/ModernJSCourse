const producto = "           Monitor 24 pulgadas             "

// Eso es para que vea cuantos caracteres tiene el string
console.log(producto.length);
// Esto es para que borre los espacios en blanco del string PERO SOLO AL INICIO
console.log(producto.trimStart());
// Esto es para que borre los espacios en blanco del string PERO SOLO AL FINAL
console.log(producto.trimEnd());
// Esto es para que borre los espacios en blanco de TODO EL STRING
console.log(producto.trim());

// Es muy importante que entre el parentesis no haya nada, ya que eso es lo que borrara.