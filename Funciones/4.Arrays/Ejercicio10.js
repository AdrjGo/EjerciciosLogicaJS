/*
Dados dos arreglos a y b de la misma longitud, devolver el arreglo de las sumas de sus elementos correspondientes.
Entrada: [−17, 4, 8, −28], [24, 7, −14, 9]. Salida: [7, 11, −6, −19].
*/

function sumaArrays(a, b) {
  let arraySumado = [];
  for (let i in a) {
    let suma = a[i] + b[i];
    arraySumado.push(suma);
  }
  return arraySumado;
}
console.log(sumaArrays([-17, 4, 8, -28], [24, 7, -14, 9]));
