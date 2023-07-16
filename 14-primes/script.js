/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/


function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for(let i = 2; i < n; i++){
        if(n % i == 0) return false;
    }
    return true
}

function primes(num) {
    const arr = []
    for (let i = 0; i <= num; i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]