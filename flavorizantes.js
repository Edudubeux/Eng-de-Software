const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Olá, escolha abaixo o flavorizante que você deseja: ");

console.log("Digite 1 para: Essência de morango");
console.log("Digite 2 para: Essência de framboesa");
console.log("Digite 3 para: Essência de kiwi");
console.log("Digite 4 para: Essência de rum");
console.log("Digite 5 para: Essência de uva");
console.log("Digite 6 para: Essência de abacaxi");
console.log("Digite 7 para: Essência de banana");
console.log("Digite 8 para: Essência de laranja");

rl.question("", valor => {
    const flavorizante = Number(valor)
    
    if (isNaN(flavorizante) || flavorizante < 1 || flavorizante > 8) { // Validação 
        console.log("Valor inválido. Digite um valor que seja um NÚMERO!");
        return;
    }

    switch (flavorizante) {
        case 1: 
            console.log("Para a essência de morango, o éster utilizado é o Butanoato de etila");
            break;
        case 2: 
            console.log("Para a essência de framboesa, o éster utilizado é o Etanoato de butila");
            break;
        case 3: 
            console.log("Para a essência de kiwi, o éster utilizado é o Benzoato de metila");
            break;
        case 4: 
            console.log("Para a essência de rum, o éster utilizado é o Propanoato de isobutila");
            break;
        case 5: 
            console.log("Para a essência de uva, o éster utilizado é o Metanoato + heptanoato de etila");
            break;
        case 6: 
            console.log("Para a essência de abacaxi, o éster utilizado é o Butanoato de etila");
            break;
        case 7: 
            console.log("Para a essência de banana, o éster utilizado é o Acetato de isopentila");
            break;
        case 8: 
            console.log("Para a essência de laranja, o éster utilizado é o Acetato de octila");
            break;
    }
})