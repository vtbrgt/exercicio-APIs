const span = document.querySelector('span')
let valorReais = {}

function getValue() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(BRL => valorReais = BRL.BRL)
    .then((set) => {
       span.innerText = ('R$ ' + valorReais.buy).replace('.', ',') 
    }
    )
}
getValue()
setInterval(getValue, 30000)