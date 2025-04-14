function calcularPromedioNotas (n1, n2, n3){
    return ((n1 + n2 + n3) /3);
}
function mayorNumero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        return n1;
    } else if (n2 > n1 && n2 > n3) {
        return n2;
    } else {
        return n3;
    }
}

function menorNumero(n1, n2, n3) {
    if (n1 < n2 && n1 < n3) {
        return n1;
    } else if (n2 < n1 && n2 < n3) {
        return n2;
    } else {
        return n3;
    }
}
    
export {mayorNumero}
export {menorNumero}
export {calcularPromedioNotas}