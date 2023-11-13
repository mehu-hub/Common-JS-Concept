function sum(a, b, c){ // parameter
    const arg = [...arguments]
    console.log(arg)
    const result = a + b + c;
    return result
}

const total = sum(23, 42, 22, 10, 22, 33, 23); // arguments

console.log(total)
console.log(sum.length)