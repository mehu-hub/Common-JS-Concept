function add(a, b){
    const total = a + b;
    console.log(total)
    
    if(b>5){
        const sum = 24 + a + b;
    }
    console.log(sum); // doesnot accecss sum because it is out of block scope
    return total;
}

// console.log(a, b)
add(4, 5);