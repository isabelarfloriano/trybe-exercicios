//Exercise 1:
let a
let b
// addition
let add = (a+b);
// subtraction
let sub = (a-b);
// multiplication
let mul = (a*b);
// division
let div = (a/b);
// modulo
let mod = (a%b);
//Exercise 2:
const n1
const n2
if (n1>n2) {
    console.log(n1)
} else {
    console.log(n2)
}
//Exercise 3:
const n3
if (n1 > n2 && n3) {
    console.log(n1)
} else if (n2 > n1 && n3) {
    console.log(n2)
} else if (n3 > n1 && n2) {
    console.log(n3)
}
//Exercise 4:
const num_positive_negative 
if (num_positive_negative>0) {
    console.log("positive")
} else if ( num_positive_negative<0) {
    console.log("negative")
} else {
    console.log("zero")
}
//Exercise 5:
const angle1
const angle2
const angle3
let triangle_angle = angle1+angle2+angle3
if (triangle_angle>180) {
    console.log("true")
} else if (triangle_angle>=0) {
    console.log("false")
} else {
    console.log("ERRO")
}
//Exercise 6:
let piece
let pieceLowerCase = piece.toLowerCase()
switch (pieceLowerCase) {
    case "bispo":
        console.log("diagonals");
        break;
    case "bishop":
        console.log("diagonals");
        break;
    case "rei":
        console.log("todas as direções, apenas uma casa")
        break;
    case "king":
        console.log("all the directions, just one space")
        break;
    case "rainha":
        console.log("todas as direções")
        break;
    case "queen":
        console.log("all the directions")
        break;
    case "torre":
        console.log("vertical / horizontal")
        break;
    case "tower":
        console.log("vertical / horizontal")
        break;
    case "peão":
        console.log("para frente, até duas casas")
        break;
    case "pawn":
        console.log("forward until two spaces")
        break;
    default: 
        console.log("ERRO");
}
//Exercise 7:
let note 
if (note>100) {
    console.log("ERRO")
} else if (note>=90) {
    console.log("A")
} else if (note>=80) {
    console.log("B")
} else if (note>=70) {
    console.log("C")
} else if (note>=60) {
    console.log("D")
} else if (note>=50) {
    console.log("E")
} else if (note<50) {
    console.log("F")
} else {
    console.log("ERRO")
}
//Exercise 8:
