function fibonacci(n: number): number {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const num = 5;
const result = fibonacci(num);
console.log(`The Fibonacci number at position ${num} is ${result}`);
