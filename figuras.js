//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + "cm²");
console.groupEnd();


//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: "
+ ladoTriangulo1
+ "cm, "
+ ladoTriangulo2
+ "cm, "
+ baseTriangulo
+ "cm"
);


const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del tríangulo mide: " + areaTriangulo + "cm²");

console.groupEnd();



//Código del círculos
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;


//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo es: " + areaCirculo + "cm²");

console.groupEnd();