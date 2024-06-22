# Ejercicios de lógica de programación JS

![picture alt](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2Fy-vRSgOhWBWoMvVsmTrko9BVfNrhckcFowdlfJXA&s "JavaScript")

Los ejercicios se pueden resolver en Python, o en otros lenguajes de tipización dinámica (por ejemplo, JavaScript), o en lenguajes imperativos con tipización estricta (C++, Java, C#). La mayor parte de los ejercicios se puede resolver también en lenguajes funcionales (Haskell).

**RECOMENDACIÓN**: Si utiliza VisualStudioCode le será útil la extensión "Quokka.js" para que ejecute automaticamente el código JavaScript y le aparezca en pantalla inmediatamente.

## Indice

- [Funciones](#funciones "Goto Funciones")
  - [Simples](#simples "Goto Simples")
  - [Booleanas](#booleanas "Goto Booleanas")
  - [Condicionales](#condicionales "Goto Condicionales")
  - [Arrays](#arrays "Goto Arrays")

## Funciones

El concepto principal de programación es el concepto de función. Por supuesto, aquí hablamos de funciones computables que se realizan por medio de secuencias de operaciones elementales. La función recibe algunos argumentos (la «entrada» de la función) y regresa un resultado (la «salida» de la función).

### Simples

```
//EJERCICIO 1
/*
Escribir una función de un argumento entero a que calcule y regrese el cubo de a.
Ejemplo. Entrada: −11. Salida: −1331.
Ejemplo. Entrada: 5. Salida: 125.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio1.js "Ejercicio1")

```
//EJERCICIO 2
/*
Escribir una función de un argumento x que devuelva el cuadrado de x.
Ejemplo. Entrada: 17. Salida: 289.
Ejemplo. Entrada: −6. Salida: 36.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio2.js "Ejercicio2")

```
//EJERCICIO 3
/*
Escribir una función de dos argumentos x, y que devuelva su diferencia x − y.
Ejemplo. Entrada: 5, 18. Salida: −13.
Ejemplo. Entrada: 32, −5. Salida: 37.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio3.js "Ejercicio3")

```
//EJERCICIO 4
/*
Dados dos números enteros, regresar la suma de sus cubos.
Ejemplo. Entrada: 3, −12. Salida: −1701.
Ejemplo. Entrada: 15, −14. Salida: 631.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio4.js "Ejercicio4")

```
//EJERCICIO 5
/*
Escribir una función de dos argumentos reales a, b que calcule y regrese la raíz cuadrada
de la suma de sus cuadrados, es decir, la longitud de la hipotenusa del triángulo rectángulo
cuyos catetos tienen longitudes a, b.
Sugerencia: en el lenguaje de programación elegido encontrar la función que calcula la raíz cuadrada.
Ejemplo. Entrada: 11, 27.5. Salida: 29.6184064392398.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio5.js "Ejercicio5")

```
//EJERCICIO 6
/*
Dados tres números a, b, c, regresar su suma. En otras palabras, hay que escribir una función
con tres argumentos que calcule y regrese la suma de sus argumentos.
Ejemplo. Entrada: 25, −3, 17. Salida: 39.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio6.js "Ejercicio6")

```
//EJERCICIO 7
/*
Dado un número real estrictamente positivo, regresar su raíz cúbica.
Ejemplo. Entrada: 65. Salida: 4.02072575858906.
Ejemplo. Entrada: 1000. Salida: 10.0000000000000.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio7.js "Ejercicio7")

```
//EJERCICIO 8
/*
Dados tres números a, b, c, regresar la longitud de la diagonal del paralelogramo cuyos lados
tienen longitudes a, b, c.
Entrada: −2.5, 0.3, −1.9. Salida: 3.1532620591175.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio8.js "Ejercicio8")

```
//EJERCICIO 9
/*
Dados dos números reales positivos a, b, regresar la medida del ángulo BAC en el triángulo ABC,
si el ángulo ACB es recto, |BC| = a y |AC| = b Sugerencia: en el lenguaje de programación
elegido encontrar la función trigonométrica inversa adecuada.
Entrada: 2.7, 5. Salida: 0.4951332634684.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio9.js "Ejercicio9")

```
//EJERCICIO 10
/*Dado un número entero x, regresar el resto al dividir x entre 7.
Sugerencia: encontrar la operación o la función correspondiente en el lenguaje de programación elegido.
Ejemplo. Entrada: 17. Salida: 3.
Ejemplo. Entrada: −40. Salida: -5.
Ejemplo. Entrada: 35. Salida: 0.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio10.js "Ejercicio10")

```
//EJERCICIO 11
/*
Dado un número entero no negativo x, devolver la suma de los últimos dos dígitos de x en el
sistema decimal.
Sugerencia: usar el cociente y el resido al dividir entre 10.
Ejemplo. Entrada: 729. Salida: 11.
Ejemplo. Entrada: 688. Salida: 16.
Ejemplo. Entrada: 5. Salida: 5.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio11.js "Ejercicio11")

```
//EJERCICIO 12
/*
Escribir la función de dos argumentos reales positivos p, q, que calcule y regrese la raíz
más grande de la ecuación x2 − 2p x − q = 0
Sugerencia: aplica la formula general
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/1.%20Simples/Ejercicio12.js "Ejercicio12")

### Booleanas

```
//EJERCICIO 1
/*
Determinar si el número entero dado es positivo. En otras palabras, escribir una función
de un argumento entero; si el número dado es positivo, la función debe regresar True;
en otro caso la función debe regresar False.
Ejemplo. Entrada: 8. Salida: True.
Ejemplo. Entrada: 53. Salida: True.
Ejemplo. Entrada: 0. Salida: False.
Ejemplo. Entrada: −4. Salida: False.
Ejemplo. Entrada: −70. Salida: False.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio1.js "Ejercicio1")

```
//EJERCICIO 2
/*
Determinar si el número entero dado es estrictamente menor que 7.
Ejemplo. Entrada: 5. Salida: True.
Ejemplo. Entrada: 7. Salida: False.
Ejemplo. Entrada: 82. Salida: False.
Ejemplo. Entrada: −31. Salida: True.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio2.js "Ejercicio2")

```
//EJERCICIO 3
/*
Dados tres números enteros a, b, x, determinar si x es mayor o igual al número a y al mismo
tiempo estrictamente menor que b. En otras palabras, determinar si el número x pertenece al
intervalo a, b.
Observación: si a ≥b, entonces para cualquier x la función debe regresar False.
Ejemplo. Entrada: 3, 32, 20. Salida: True.
Ejemplo. Entrada: −7, 40, 43. Salida: False.
Ejemplo. Entrada: 40, 6, 30. Salida: False
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio3.js "Ejercicio3")

```
//EJERCICIO 4
/*
Determinar si el número entero dado es par.
Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que
regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 5. Salida: False.
Ejemplo. Entrada: −44. Salida: True.
Ejemplo. Entrada: 0. Salida: True.
Ejemplo. Entrada: 466. Salida: True.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio4.js "Ejercicio4")

```
//EJERCICIO 5
/*
Determinar si el número entero dado es impar.
Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que
regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 5. Salida: True.
Ejemplo. Entrada: −44. Salida: False.
Ejemplo. Entrada: 0. Salida: False.
Ejemplo. Entrada: 466. Salida: False.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio5.js "Ejercicio5")

```
//EJERCICIO 6
/*
Determinar si el número entero dado es un múltiplo de 3. En otras palabras, dado un número
entero a, regresar True si a es un múltiplo de 3; regresar False en otro caso.
Sugerencia: en el lenguaje de programación elegido encontrar la operación o función que
regresa el resto al dividir un número entre otro.
Ejemplo. Entrada: 18. Salida: True.
Ejemplo. Entrada: −42. Salida: True.
Ejemplo. Entrada: −71. Salida: False.
Ejemplo. Entrada: 0. Salida: True.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/2.%20Booleanas/Ejercicio6.js "Ejercicio6")

### Condicionales

```
//EJERCICIO 1
/*
Dado un número entero, regresar su valor absoluto. Sugerencia: usar la expresión condicional
y el operador condicional.
Ejemplo. Entrada: −17. Salida: 17.
Ejemplo. Entrada: 63. Salida: 63.
Ejemplo. Entrada: 0. Salida: 0.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio1.js "Ejercicio1")

```
//EJERCICIO 2
/*
Dado un número entero a, regresar su parte positiva. En otras palabras, si a es mayor o
igual a cero, entonces regresar el mismo número a; en otro caso regresar el número cero.
Ejemplo. Entrada: −20. Salida: 0.
Ejemplo. Entrada: 38. Salida: 38.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio2.js "Ejercicio2")

```
//EJERCICIO 3
/*
Escribir una función max2 de dos argumentos enteros que regrese el más grande de estos dos números.
Ejemplo. Entrada: 70, −43. Salida: 70.
Ejemplo. Entrada: −23, −10. Salida: −10.
Ejemplo. Entrada: −42, 35. Salida: 35.
Ejemplo. Entrada: −17, −17. Salida: −17.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio3.js "Ejercicio3")

```
//EJERCICIO 4
/*
Escribir una función max3 de tres argumentos enteros que regrese el más grande de estos tres números.
Sugerencia: usar la función max2 del Ejercicio Cond2.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio4.js "Ejercicio4")

```
//EJERCICIO 5
/*
Escribir una función min2 de dos argumentos enteros que regrese el más pequeño de estos dos números.
Ejemplo. Entrada: 70, −43. Salida: 43.
Ejemplo. Entrada: −23, −10. Salida: −23.
Ejemplo. Entrada: −42, 35. Salida: −42.
Ejemplo. Entrada: −17, −17. Salida: −17.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio5.js "Ejercicio5")

```
//EJERCICIO 6
/*
Escribir una función min3 de tres argumentos enteros que regrese el más pequeño de estos tres números.
Sugerencia: usar la función min2 del Ejercicio anterior.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio6.js "Ejercicio6")

```
//EJERCICIO 7
/*
Están dados dos números enteros, a y b. Hagamos un análisis de la ecuación lineal a x = b,
donde la incógnita x puede ser un número racional. Si la ecuación tiene una única solución,
entonces regresar 1. Si la ecuación no tiene solución, entonces regresar 0. Si la ecuación
tiene más de una solución, entonces regresar 2.
Ejemplo. Entrada: 70, −37. Salida: 1.
Ejemplo. Entrada: 0, 56. Salida: 0.
Ejemplo. Entrada: 0, 0. Salida: 2.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio7.js "Ejercicio7")

```
//EJERCICIO 8
/*
Dados tres números reales a, b, x, devolver 1 si a ≤ x ≤ b; devolver 0 en otro caso.
En otras palabras, se trata de programar la función característica del segmento [a, b].
Ejemplo. Entrada: −3.0, 7.5, 5.0. Salida: 1.
Ejemplo. Entrada: 7.5, −3.0, 5.0. Salida: 0.
Ejemplo. Entrada: −3.0, 7.5, −5.0. Salida: 0.
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/3.%20Condicionales/Ejercicio8.js "Ejercicio8")

### Arrays

```
//EJERCICIO 1
/*
Dado un número natural n y un número entero v, regresar el arreglo de longitud n
tal que todas sus entradas son iguales a v. En otras palabras, construir un arreglo
constante de longitud dada y con el valor dado.
Entrada: 6, −14. Salida: [−14, −14, −14, −14, −14, −14].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio1.js "Ejercicio1")

```
//EJERCICIO 2
/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son
los cuadrados de los primeros números naturales.
Entrada: 5. Salida: [0, 1, 4, 9, 16].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio2.js "Ejercicio2")

```
//EJERCICIO 3
/*
Dados un número natural n y un número entero x, regresar el arreglo de longitud n
cuyos elementos son los cuadrados de los enteros consecutivos, a partir de x.
Entrada: 7, −4. Salida: [16, 9, 4, 1, 0, 1, 4].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio3.js "Ejercicio3")

```
//EJERCICIO 4
/*
Dado un número natural n, regresar el arreglo a de longitud n cuyos elementos son
las primeras potencias de 2, a partir de la potencia 0. Sugerencia: utilizar la
fórmula recursiva para las potencias de 2. En otras palabras, para cada j con j ≥1,
expresar a[j] a través de a[j − 1].
Entrada: 5. Salida: [1, 2, 4, 8, 16].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio4.js "Ejercicio4")

```
//EJERCICIO 5
/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los
 factoriales de los primeros números naturales.
Sugerencia: utilizar la fórmula recursiva para la función factorial.
Entrada: 5. Salida: [1, 1, 2, 6, 24].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio5.js "Ejercicio5")

```
//EJERCICIO 6
/*
Dado un número natural n, regresar el arreglo de longitud n cuyos elementos son los
números 1 (en posiciones pares) y −1 (en posiciones impares).
Entrada: 5. Salida: [1, −1, 1, −1, 1].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio6.js "Ejercicio6")

```
//EJERCICIO 7
/*
Dado un número natural n y dos números enteros a y b, regresar el arreglo de longitud n
que contiene los primeros n elementos de la progresión aritmética con el valor
inicial a y la diferencia (incremento) b.
Entrada: 5, −3, 11. Salida: [−3, 8, 19, 30, 41].
Entrada: 4, 20, −15. Salida: [20, 5, −10, −25].
Entrada: 0, 5, −3. Salida: [].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio7.js "Ejercicio7")

```
//EJERCICIO 8
/*
Dado un arreglo a de números enteros, regresar un arreglo de números enteros de la
misma longitud, cuyos elementos son los cuadrados de los elementos del arreglo dado.
Entrada: [−12, 23, 14, 6]. Salida: [144, 529, 196, 36].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio8.js "Ejercicio8")

```
//EJERCICIO 9
/*
Dado un arreglo a de números enteros, regresar un arreglo que contiene los elementos de a en el orden invertido.
Entrada: [−12, 23, 14, 6]. Salida: [6, 14, 23, −12].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio9.js "Ejercicio9")

```
//EJERCICIO 10
/*
Dados dos arreglos a y b de la misma longitud, devolver el arreglo de las sumas de sus elementos correspondientes.
Entrada: [−17, 4, 8, −28], [24, 7, −14, 9]. Salida: [7, 11, −6, −19].
*/
```

[Solución](https://github.com/AdrjGo/EjerciciosLogicaJS/blob/main/Funciones/4.%20Arrays/Ejercicio10.js "Ejercicio10")