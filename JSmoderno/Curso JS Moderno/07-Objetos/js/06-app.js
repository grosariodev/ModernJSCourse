const objeto = {
    nombre:"Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    information: {
        pepe: {
            pais: "china"
        },
        wallet: {
            remedio: 22
        }
    }
}

const { nombre, information: {pepe: {pais}}} = objeto;

console.log(pais);

