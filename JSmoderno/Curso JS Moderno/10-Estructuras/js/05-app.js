// Switch case

const metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo':
    console.log(`Usted a pagado con ${metodoPago}`);
    break;

    default:
    console.log('Metodo no soportado');
    break;
}