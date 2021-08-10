// Symbols

/** 
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId == uniqueId2); */

/**
 
const uniqueId = Symbol ('Hello');

const obj = {
    [uniqueId]: 'Hello'
    
};

console.log(obj) */

/**
function hello () {
    console.log ('Hello');
    console.log ('From');
    console.log ('function!');
}
hello();
*/
//generators

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
 
const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//

