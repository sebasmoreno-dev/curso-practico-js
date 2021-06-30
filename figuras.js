//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado () {
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