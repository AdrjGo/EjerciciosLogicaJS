/*
Dados tres números a, b, c, regresar la longitud de la diagonal del paralelogramo cuyos lados tienen longitudes a, b, c. Entrada: −2.5, 0.3, −1.9. Salida: 3.1532620591175.
*/

function longitudDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}
console.log(longitudDiagonal(-2.5, 0.3, -1.9));
