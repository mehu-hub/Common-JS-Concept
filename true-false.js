/* 
// Truethy ------------------------------
1. True
2. Any number (+ve, -ve) will be truethy other than "0"
3. Any String without empty string - 
4. {}
5. []

// Falsy --------------------------------
1. False
2. Number of "0"
3. empty string ''
4. undefined
5. null
*/


const x = false;
if(x){
    console.log('Value of x is Truthy')
}
else{
    console.log('value of x is falsy')
}

//--------------------------------------------


const y = '';
if(!y){
    console.log('Value is Falsy')
}

const z = {};
if(!!z){
    console.log('Value is truthy')
}  