let tipoCarro;
let kmsPercorrido;
let valorTotal;
let diasAlugado;

tipoCarro = prompt("Se o seu carro for popular digite P, caso for de luxo digite L: ");
if ((tipoCarro) == "P") {
    diasAlugado = parseInt(prompt("Quantos dias você ficou com o carro?: "));
    kmsPercorrido = parseFloat(prompt("Quantos kms você percorreu?: "));
    if ((kmsPercorrido) <= 100) {
        valorTotal = (90 * diasAlugado) + (0.2 * kmsPercorrido);
        alert(`O valor total a ser pago será de: ${valorTotal}`);
    } else {
        valorTotal = (90 * diasAlugado) + (0.1 * kmsPercorrido);
        alert(`O valor total a ser pago será de: ${valorTotal}`);
    }
}
else if ((tipoCarro) == "L") {
    diasAlugado = parseInt(prompt("Quantos dias você ficou com o carro?: "));
    kmsPercorrido = parseFloat(prompt("Quantos kms você percorreu?: "));
    if ((kmsPercorrido) <= 200) {
        valorTotal = (150 * diasAlugado) + (0.2 * kmsPercorrido);
        alert(`O valor total a ser pago será de: ${valorTotal}`);
    } else {
        valorTotal = (150 * diasAlugado) + (0.1 * kmsPercorrido);
        alert(`O valor total a ser pago será de: ${valorTotal}`);
    }
} else { alert("Tente novamente e digite somente uma das duas opções: (L)para luxo OU (P) para Popuplar") };
