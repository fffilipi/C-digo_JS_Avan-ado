/** var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment

var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2) */


//adicionando arrays

/**

var arr = ['Apple', 'Banana', 'Orange' ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0]; */

// Destructuring Assignment

/** 

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato2']];

console.log(tomato2) */

/**
var obj = {
     name:'Filipi'
}

// Destructuring Assignment

var { name: name2 } = obj;

name2 = 'Natã';

console.log(obj); */

var obj = {
    name:'Filipi',
    props: {
        age:27
    }
};

var age = obj.props.age;


// Destructuring Assignment

var {props: {age: age2}} = obj

console.log(age2);
