// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const span = document.querySelector('span')
let valorReais = {}

function getValue() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(BRL => valorReais = BRL.BRL)
    .then(set => span.innerText = valorReais.last)
}
getValue()
setInterval(getValue, 30000)