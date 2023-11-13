 // Primitive types are pass by Value
let num1 = 32;
let num2 = 22;

function multipy(a, b) {
    a = 32;
    const total = a * b;
    return total;
}
console.log(num1)
const result = multipy(num1, num2);
console.log(result)



// Object and array are pass by reference
let student1 = {
    name: 'Jalil',
    partner: 'borsha'
}
let student2 = {
    name: 'Raj',
    partner: 'Pori'
}


function makeMovie(couple1, couple2){
    couple1.name = 'Ononto';
    couple2.partner = 'Mim';
}

console.log(student1)
makeMovie(student1, student2)
console.log(student1, student2)