/*
Dados tres números enteros a, b, x, determinar si x es mayor o igual al número a y al mismo tiempo estrictamente menor que b. En otras palabras, determinar si el número x pertenece al intervalo a, b.
Observación: si a ≥b, entonces para cualquier x la función debe regresar False.
Ejemplo. Entrada: 3, 32, 20. Salida: True.
Ejemplo. Entrada: −7, 40, 43. Salida: False.
Ejemplo. Entrada: 40, 6, 30. Salida: False
*/
function intermedio(a, b, x){
    if(x >= a && x < b){
        return true
    }else{
        return false
    }
}
console.log(intermedio(3, 32, 20))
console.log(intermedio(-7, 40, 43))
console.log(intermedio(40, 6, 30))