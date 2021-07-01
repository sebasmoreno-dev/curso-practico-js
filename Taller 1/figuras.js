//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El área del cuadrado mide: " + areaCuadrado + "cm²");
console.groupEnd();


//Código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/* console.log("Los lados del triangulo miden: "
+ ladoTriangulo1
+ "cm, "
+ ladoTriangulo2
+ "cm, "
+ baseTriangulo
+ "cm"
); */


const altura = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}
//console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del tríangulo mide: " + areaTriangulo + "cm²");

console.groupEnd();



//Código del círculos
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
function diametroCirculo (radio) {
    return radio * 2;
}
//console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("El area del círculo es: " + areaCirculo + "cm²");

console.groupEnd();


// Aquí interactuamos con el HTML
//Calculo del Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + " cm²");
}

//Calculo del Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloA",);
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloB",);
    const value2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase",);
    const value3 = Number(input3.value);


    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert("El perimetro del triangulo es: " + perimetro + " cm");
}


function calcularAreaTriangulo() {
    const input3 = document.getElementById("InputTrianguloBase",);
    const value3 = Number(input3.value);

    const input4 = document.getElementById("InputTrianguloAltura");
    const value4 = Number(input4.value);

    const area = areaTriangulo(value3, value4);
    alert("El área del tríangulo es: " + area + " cm²");
}

//RETO

function calculoAlturaTriangulo(lado1, lado2, base) {
    if(lado1 === lado2) {
      return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4));
    }
    else {
        console.log("NO es un triángulo isósceles.");
    }
}

console.log(calculoAlturaTriangulo(20, 20, 10));

//Hipotenusa al cuadrado
/* function calcularHipotenusaTriangulo(lado1) {
    return lado1 * lado1;
}
console.log(calcularHipotenusaTriangulo(14));

//Base al cuadrado
function calcularBaseDelTriangulo(base) {
    return (base / 2) * (base / 2);
}
console.log(calcularBaseDelTriangulo(22));

function calcularDiferenciaDeHipotenusaYBase(lado1, base) {
    const hiponusaAlCuadrado = calcularHipotenusaTriangulo(lado1);
    const BaseAlCuadrado = calcularBaseDelTriangulo(base);

    return hiponusaAlCuadrado - BaseAlCuadrado;
}
console.log(calcularDiferenciaDeHipotenusaYBase(14, 22));


//Raiz cuadrada del valor final
function calcularRaizCuadrada(lado1, base) {
    const alturaAlCuadrado = calcularDiferenciaDeHipotenusaYBase(lado1, base);
    return (Math.sqrt(alturaAlCuadrado));
}
console.log(calcularRaizCuadrada(14, 22));
// expected output: 8,66 */


//Calculo del Círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del tríangulo es: " + perimetro + " cm");
}

function calcularRadioCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const radio =  areaCirculo(value);
    alert("El rádio del círculo es: " + radio + " cm");
}