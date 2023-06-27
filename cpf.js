const cpf = "71430066458"

function validaCpf (value) {
    let cpf = [...value]

    if (value.length != 14 && value.length != 11) {
        console.log("CPF inválido.");
    };

    const condicao = cpf[3] != '.' && cpf[7] != '.' && cpf[11] != '-';
    
    if (condicao) {
        cpf = cpf.slice(0,3).concat(['.']).concat(cpf.slice(3,6).concat(['.'])).concat(cpf.slice(6,9).concat(['-'])).concat(cpf.slice(9));
    };

    const digito = cpf[10];
    let estado;

    switch (digito) {
        case '0':
            estado = "Rio Grande do Sul"
            break;
        case '1':
            estado = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul ou Tocantins"
            break;
        case '2':
            estado = "Amazonas, Pará, Roraima, Amapá, Acre ou Rondônia"
            break;
        case '3':
            estado = "Ceará, Maranhão ou Piauí"
            break;
        case '4':
            estado = "Paraíba, Pernambuco, Alagoas ou Rio Grande do Norte"
            break;
        case '5':
            estado = "Bahia ou Sergipe"
            break;
        case '6':
            estado = "Minas Gerais"
            break;
        case '7':
            estado = "Rio de Janeiro ou Espírito Santo"
            break;
        case '8':
            estado = "São Paulo"
            break;
        case '9':
            estado = "Paraná ou Santa Catarina"
            break;
    }

    console.log(`Seu estado é ${estado}`);
};

validaCpf(cpf)