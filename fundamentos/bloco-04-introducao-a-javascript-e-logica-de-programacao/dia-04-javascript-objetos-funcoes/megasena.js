//1. Gerar um numero aleatório

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    // math.random vai sortear um número e math.floor pega o número inteiro;
    return randomNumber
}

//2. Gerar um jogo (sortear os numeros)

function generateGame() {
    let megaSenaDraw = [];

    for (let index = 1; index <= 6; index += 1) {
        let randomNumber = generateRandomNumber();
        megaSenaDraw.push(randomNumber)
    }

    return megaSenaDraw;
}

let megaSenaNumbers = generateGame();

//3. Conferir se a pessoa Acertou - Ganhou na mega sena

let priscilaGame = generateGame();

function checkMegaSenaResult (result,game) {
    let numberOfHits = 0;
    for (let index = 0; index < result.length; index ++) {
        let drawnNumber = result[index];
        for (let gameindex = 0; gameindex < result.length; gameindex ++) {
            let priscilaNumber = priscilaGame[gameindex];
            if (drawnNumber === priscilaGame){
                numberOfHits ++
            }
        }

    }
    return numberOfHits;
}

console.log('Jodo da Mega Sena: ' + megaSenaNumbers);
console.log('Jogo da Pri: ' + priscilaGame);
console.log('O jogo teve: ' + checkMegaSenaResult(megaSenaNumbers, priscilaGame));
