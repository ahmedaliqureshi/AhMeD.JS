// there are mainly 2 types of conversion 
// 1. implecit datatype 
// 2. explecit datatype

/*
  implecit datatype:-  it converts the datatypes automaticall
 
  explecit datatype:-  it need manual datatype conversion. 
*/

// a= '2'+1; 
// console.log(a); 

// b="2"+true; 
// console.log(b); 

// c= "3"+null; 
// console.log(c);

// d="4"+"2"; 
// console.log(d);

// any thing to number use only (-,*,\)

let a; 
a = '5' - '3'; 
console.log(a);

let b; 
b = '2' * 3; 
console.log(b);

let c; 
c= '5' / 5; 
console.log(c);

let d; 
d= 2 - 'hi'; 
console.log(d); // nan= not an number 

// anything in boolean 

let a1= '5'- true; 
console.log(a1); 

let a2= 2 * false;
console.log(a2); 

let a3= 234 * 2*(4*(true))-false; 
console.log(a3); 

// null to numebr 
// null=0 
let c1= 4 + null + false+ true+ 2*(true);
console.log(c1);

//undefined to null 
let d1= undefined + 5; 
console.log(d1); 
let d2= true + undefined; 
console.log(d2); 






