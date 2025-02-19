// Se declara una constante 'autenticado' con un valor booleano 'true' (verdadero)
const autenticado = true;

// Se verifica si el usuario está autenticado
if (autenticado) {
    console.log('El usuario esta autenticado'); // Si 'autenticado' es true, se muestra este mensaje en la consola
}

// Se declara una constante 'puntaje' con un valor de 450
const puntaje = 450;

// Se define una función llamada 'revisarPuntaje'
function revisarPuntaje() {
    // Si 'puntaje' es mayor que 400, imprime 'Excelente!' y termina la ejecución de la función
    if (puntaje > 400) {
        console.log('Excelente!');
        return; // Se usa 'return' para salir de la función y evitar que siga evaluando más condiciones
    }

    // Si 'puntaje' es mayor que 300 (pero menor o igual a 400), imprime 'Buen puntaje... felicidades'
    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    }
}

// Se llama a la función 'revisarPuntaje' para evaluar el puntaje y mostrar el mensaje correspondiente
revisarPuntaje();
