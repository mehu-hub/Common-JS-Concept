// 8 way to get undefined 



// 1. Variable that is not initialized will give undefined
let first;
console.log(first);

// 2. Function with no return
function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result)


// 3. Parameter that is not passed and get undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d)
}
third(23, 22)


// 4. if return has nothins on the right side will return undefined
function noNegetive(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}

const total = noNegetive(2, -5);
console.log(total)


// 5. property that doesn't exists on an object will give you undefined
const fifth = {
    id: 2,
    name: 'Mehedi Hasan',
    age: 21
}
console.log(fifth.salary)


// 6. accessing array elements ouside of the index range 
const six = [3, 4, 5, 2, 4];
console.log(six[5]);


// 7. Deleting an element inside an array ... Should not do it. Instead use splice 
const seven = [1, 2, 3, 23, 423];
delete seven[2];
console.log(seven)


// 8. set a value directly to undefined
const eight = undefined;
console.log(eight)

const data = {
    result: [1],
    update: null
}
console.log(data.update)


// JS Mistake
console.log(typeof null)
