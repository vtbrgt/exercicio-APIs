const span = document.querySelector('span')
let valorReais = {}

async function getValue() {
    const bitCoinInfo = await fetch('https://blockchain.info/ticker')
    const bitCoinReal = await (await bitCoinInfo).json()
    span.innerText = ('R$ ' + bitCoinReal.BRL.buy).replace('.', ',') 
}
getValue()
setInterval(getValue, 30000)