let number1 = 35;
let number2 = 59;
let number3 = 5;
let number4 = 10;
let number5 = 45;
let number6 = 31;

let megaSenaJogo = [number1,number2,number3, number4, number5, number6];

let isaacJogo = [10,22,35,41,52,59]

for (let index=0; index < isaacJogo.length; index += 1) {
    console.log('Jogo do Isaac', isaacJogo[index]);
}

for (let index2=0; index2 < megaSenaJogo.length; index2 +=1){
    console.log('Jogo MegaSena', megaSenaJogo[index2]);
}