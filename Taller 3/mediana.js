function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function calcularMediana(lista) {

    const listaOrdenada = lista.sort(function(a, b) {
        return a - b;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    let mediana;

        if (esPar(listaOrdenada.length)) {
            const elemento1 = listaOrdenada[mitadLista - 1];
            const elemento2 = listaOrdenada[mitadLista];

            const promedioElemento1Y1 = calcularMediaAritmetica([
                elemento1,
                elemento2,
        ]);

    mediana = promedioElemento1Y1;
    } else {
    mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}
console.log(calcularMediana([200, 400, 500, 100, 900]));


/* let listax = [2, 5, 7, 8, 9, 22, 13, 1];
listax.sort(function(a, b) {
    return a - b;
});
console.log(listax); */


/* if (lista1 es par?) {
    necesitamos dos elementos
    el promedio
    la mediana
} else {
    //posicion de mitadLista1 desntro de lista1
} */