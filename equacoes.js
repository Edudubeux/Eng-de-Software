const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Olá, vamos encontrar as icógnitas 'x' e 'y' para as equações 'Ax + By = C' e 'Dx + Ey = F' ?")

rl.question("Informe um valor para 'A': ", valor => {
    const a = Number(valor);
    if (isNaN(a)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
rl.question("Informe um valor para 'B: ", valor => {
    const b = Number(valor);
    if (isNaN(b)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
rl.question("Informe um valor para 'C': ", valor => {
    const c = Number(valor);
    if (isNaN(c)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
rl.question("Informe um valor para 'D': ", valor => {
    const d = Number(valor);
    if (isNaN(d)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
rl.question("Informe um valor para 'E': ", valor => {
    const e = Number(valor);
    if (isNaN(e)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
rl.question("Informe um valor para 'F': ", valor => {
    const f = Number(valor);
    if (isNaN(f)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }

    function resolveEquação() {
        console.clear()
        const x = ((b * f) - (e * c))/((b * d) - (e * a))
        const y = (c - (a * x))/b
        
        console.log(`O valor de x deu: ${x}, e o valor de y deu: ${y}.`);
    }
    
    resolveEquação()
    })
    })
    })
    })
    })
})