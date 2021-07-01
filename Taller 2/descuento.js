//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


//console.log("El precio original " + precioConDescuento);

//EJERCICIO NORMAL
/* function buttonPriceDiscount() {
    const inputPrice = document.getElementById("Inputprice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const Resultp = document.getElementById("Resultp");
    Resultp.innerText = "El precio con descuento son: $" + precioConDescuento + " dolares";
} */


//RETO
//Crear un array de cupones

const coupons = [
    "Sebastian_dev",
    "Hola_mundo",
    "Borra_el_lol"
];

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("Inputprice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case "Sebastian_dev":
            descuento = 50;
            break;
        case "Hola_mundo":
            descuento = 35;
            break;
        case "Borra_el_lol":
            descuento = 25;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const Resultp = document.getElementById("Resultp");
    Resultp.innerText = "El precio con descuento son: $" + precioConDescuento + " dolares";
}

