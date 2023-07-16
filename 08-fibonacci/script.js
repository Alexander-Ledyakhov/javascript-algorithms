/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let numberFibonacciA = 0;
    let numberFibonacciB = 1;
    for (let i = 2; i <= n; i++) {
        const numberFibonacciC = numberFibonacciA + numberFibonacciB;
        numberFibonacciA = numberFibonacciB;
        numberFibonacciB = numberFibonacciC;
    }
    return numberFibonacciA;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(1)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
console.log(fibonacci(0));