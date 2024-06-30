/*
Escribir la función de dos argumentos reales positivos p, q, que calcule y regrese la raíz 
más grande de la ecuación x2 − 2p x − q = 0
Sugerencia: aplica la formula general
*/
function ecuacion(p, q) {
    let raiz = p + Math.sqrt(p ** 2 + q);
    return raiz;
  }
  console.log(ecuacion(3, 2));
  console.log(ecuacion(5, 6));
  console.log(ecuacion(1, 1));
  console.log(ecuacion(2, 3));
  console.log(ecuacion(4, 8));
  