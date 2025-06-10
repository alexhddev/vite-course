import { v4 } from 'uuid'

export function average(...args:number[]){
    if (args.length === 0) {
        return 0;
    }
    const sum = args.reduce((acc, val) => acc + val, 0);
    return sum / args.length;
}

export function sum(...args:number[]){
    return args.reduce((acc, val) => acc + val, 0);
}

export function median(...args:number[]){
    if (args.length === 0) {
        return 0;
    }
    const sorted = [...args].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

export function factorial(n:number){
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

export function getRandomInt(min:number, max:number){
    if (min >= max) {
        throw new Error("Min must be less than Max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomUUID() {
    return v4();
}



