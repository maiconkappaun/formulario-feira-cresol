async function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais; nesse caso, é inválido
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validação dos dígitos verificadores
    var v1 = 0;
    var v2 = 0;
    for (var i = 0; i < 9; i++) {
        v1 += parseInt(cpf.charAt(i)) * (10 - i);
        v2 += parseInt(cpf.charAt(i)) * (11 - i);
    }

    v1 = (v1 % 11) < 2 ? 0 : 11 - (v1 % 11);
    v2 += v1 * 2;
    v2 = (v2 % 11) < 2 ? 0 : 11 - (v2 % 11);

    if (parseInt(cpf.charAt(9)) !== v1 || parseInt(cpf.charAt(10)) !== v2) {
        return false;
    }

    return true;
}