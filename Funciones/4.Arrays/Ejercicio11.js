/*
Dado un arreglo "array", regresar el arreglo b de sus sumas parciales. 
En otras palabras, b[j] es la suma de los elementos de a con índices desde 0 hasta j. 
Sugerencia: si j ≥ 1, entonces b[j] se expresa a través de b[j − 1] y a[j].
Ejemplo. Entrada: [−7, 3, 29, −18]. Salida: [−7, −4, 25, 7].
*/
function sumasParciales(array) {
  let arraySumado = [];
  arraySumado.push(array[0]);
  for (let i = 1; i < array.length; i++) {
    let suma = arraySumado[i - 1] + array[i];
    arraySumado.push(suma);
  }
  return arraySumado;
}
console.log(sumasParciales([-7, 3, 29, -18]));

//Otra solución
function sumasParciales2(array2) {
  let arraySumado2 = [];
  array2.forEach((element, index) => {
    if (index === 0) {
      arraySumado2.push(array2[index]);
    } else {
      arraySumado2.push(arraySumado2[index - 1] + element);
    }
  });
  return arraySumado2;
}
console.log(sumasParciales2([-7, 3, 29, -18]));
