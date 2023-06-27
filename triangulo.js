const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Olá, ese programa testará se o triângulo é retângulo e calculará sua tangente!");
rl.question("Digite o valor da HIPOTENUSA: ", hipot => {
    const a = Number(hipot)
rl.question("Digite o valor do cateto oposto (menor): ", opost => {
    const b = Number(opost)
rl.question("Digte o valor do cateto adjacente (maior): ", adj => {
    const c = Number(adj)

    if (isNaN(a) || isNaN(b) || isNaN(c)) { // Validação 
        console.log("Valor inválido. Digite um valor que seja um NÚMERO!");
        return;
    }
    
    if (a*2 == (b2 + c*2)) {
        const tang = b/c
        console.log(`Esse triângulo é retângulo\nO valor da sua tangente é: ${tang}`);
    } else {
        console.log("Esse triângulo não é retângulo, tente novamente.");
    }
})
})
})