// Strongly Typed Programing Language  
// int a = 21;
// string name = 'Mehedi';
// bool isMarried = false;
// object student = {name:'Mehedi}, id: 22};
// int[] numbers = [21, 23, 22, 34, 45];
// string[] friends = ['Mehedi', 'Hasan'];



// JS Dynamic Type Programing Language

// primitive
const a = 5;
const b = 'Ami ekhn ar School a jai na';
const d = true;

// non primitive
const ages = [45, 31, 23];
const student = {id:21, name:'Mehedi'};


// types of variable output 
console.log(typeof a, typeof b, typeof student)
console.log(Array.isArray(ages))


// Reasign primitive
let x = 5;
let y = x;
console.log(x, y)
y = 7;
console.log(x, y)

let p = {job: 'Web Developer'};
let q = p;
// q = {job: 'Backend Developer'}
q.job = 'Frontend Developer'
console.log(p, q)

