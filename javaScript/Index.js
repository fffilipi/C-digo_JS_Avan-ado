// spred operator string
// quebrando os argumentos e identificando
/** const str = 'Digital';

function logArgs(...args) {
    console.log(arguments);
}

logArgs(...str); **/

// quebrando os argumentos sem identificar
/** const str = 'Digital';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str); **/

//lista em função spred operator
/**
const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr); **/ 

// consumindo array combinando com outra array
/** 
 * const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = arr.concat([5, 6, 7]);

console.log(arr2); */

// consumindo array combinando com outra array

/** 
const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [5, 6, 7, ...arr];
const arr3 = [...arr2, ,...arr, 0, 0, 0];

console.log(arr3); **/

// clone arrays simples
/** 
const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

console.log(arrClone); **/

//gerar segundo obejto

/**
 
const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
    test: 123
};

const obj2= {
    ...obj,
    test2: 'hello'
};

console.log(obj2); **/

// objetos

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {...obj, subObj: {...obj.subObj}};

obj2.subObj.test = 456

console.log(obj);

