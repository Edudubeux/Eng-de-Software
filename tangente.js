const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cos
let sen
let tang

let isValid = true

rl.question("Digite um ângulo em graus: ", value => {
    const valor = Number(value)

    if (isNaN(valor) || (valor != 0 && valor != 30 && valor != 45 && valor != 60 && valor != 90)) { // Validação 
        console.log("Valor inválido. Digite um valor que seja um NÚMERO válido!");
        return;
    } 

    do {
        switch (valor) {
            case 0:
                cos = 1
                sen = 0
                tang = 0
                break;
            case 30:
                cos = 'raiz(3)/2'
                sen = 1 / 2
                tang = 'raiz(3)/2'
                break;
            case 45:
                cos = 'raiz(2)/2'
                sen = 'raiz(2)/2'
                tang = 1
                break;
            case 60:
                cos = 1 / 2
                sen = 'raiz(3)/2'
                tang = 'raiz(3)'
                break;
            case 90:
                cos = 0
                sen = 1
                tang = 'Inexistente'
                break
        }
        console.log(`O cosseno de ${valor} é ${cos}\nO seno de ${valor} é ${sen}\nA tangente de ${valor} é ${tang}\n `);
        isValid = false
    } while (isValid)

});