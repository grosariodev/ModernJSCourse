// function saludar(nombre, apellido = '') {
//     console.log(`Hola estimado ${nombre} ${apellido}`);
// }

// saludar(`Gabriel`);

iniciarApp();

function iniciarApp(){
    console.log('Iniciando App...');

    segundaFunction()
}


function segundaFunction() {
    console.log('Desde la segunda function');
    usuarioAutenticado('Pablo');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamnete: ${usuario}`);

}