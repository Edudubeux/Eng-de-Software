const sequencia = [0, 1, 1, 2, 3, 5, 8, 13, 20, 34]

function verifyFibonacci(seq) {
    for (let i = 0; i < seq.length - 2; i++) {

        const condicao = seq[i] + seq[i + 1] === seq[i + 2]
        console.log(seq[i] + seq[i + 1]);

        if (!condicao) {
            console.log(`Esta sequência não faz parte da sequência de Fibonacci em "${seq[i + 2]}"`);
            break;
        }

        if (i === 7){
            console.log("Esta sequência faz parte da sequência de Fibonacci!");
        }
        
    }

}

verifyFibonacci(sequencia)