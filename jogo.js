const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dificuldade

rl.question("Para iniciar o jogo, selecione a dificuldade que deseja jogar: \nDigite 1 para iniciante\nDigite 2 para fácil\nDigite 3 para médio\nDigite 4 para difícil\n", value => {
    dificuldade = Number(value)
    
    if (isNaN(dificuldade) || dificuldade < 1 || dificuldade > 4) { // Validação 
        console.log("Valor inválido. Digite um valor que seja um NÚMERO válido!");
        return; 
    }
    
    switch (dificuldade) {
        case 1:
            dificuldade = "Iniciante"
            break;
        case 2:
            dificuldade = "Fácil"
            break;
        case 3: 
            dificuldade = "Médio"
            break;
        case 4: 
            dificuldade = "Difícil"
            break;
    }

    function iniciaJogo (dificuldade) {
        console.log(`Você está jogando no ${dificuldade}`);
    }
    iniciaJogo(dificuldade);
});