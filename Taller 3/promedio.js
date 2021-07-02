/* const lista1 = [
    100,
    200,
    300,
    400,
    500,
]; */



function calcularMediaAritmetica(lista) {
    //CICLO FOR
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    } */
    //METODO REDUCE DE LOS ARRWAYS
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}