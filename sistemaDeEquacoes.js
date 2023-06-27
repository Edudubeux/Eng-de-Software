const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Vamos classificar os sistemas de equações!");
console.log("Para isso, passe os valores para o sistema: ");
console.log("ax + by = c, e dx + ey = f");

rl.question("Informe um valor para 'A': ", valor => {
    const a = Number(valor);
    if (isNaN(a)) {
        console.log("Valor inválido, digite um valor que seja um NÚMERO.");
        return;
    }
    rl.question("Informe um valor para 'B': ", valor => {
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
        function classifica () {
            console.clear()

            const spd = (a/d) !== (b/e)
            const spi = (a/d) === (b/e) === (c/f)
            const si = (a/d) === (b/e) !== (c/f)
            
            if (spd) {
                console.log("Sistema possível determinado!");
            }
            else if(spi) {
                console.log("Sistema possível indeterminado!");
            }
            else if(si) {
                console.log("Sistema Impossível!");
            }
        }

        classifica()
    })
})
})
})
})
})