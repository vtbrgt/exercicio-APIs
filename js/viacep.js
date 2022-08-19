const input = document.querySelector('#cep');
const btn = document.querySelector('button');

let cepData = {}
let logradouro
let bairro
let localidade
let uf
let resultado = []

function promise(url) {
  return fetch(url).then((response) => response.json());
}

function setValues() {
  logradouro = cepData.logradouro
  bairro = cepData.bairro
  localidade = cepData.localidade
  uf = cepData.uf

  resultado.push(logradouro, bairro, localidade, uf)
  resultado = resultado.join(', ').toString()
  console.log(resultado)
}

function getCEP(event) {
  event.preventDefault();
  let cepUser = input.value;
  console.log(cepUser);
  promise(`https://viacep.com.br/ws/${cepUser}/json/`)
  .then((cep) => {
    cepData = cep
  })
  .then(() => setValues())
}

function showData() {
  getCEP(event)

  const div = document.createElement('div')
  const label = document.createElement('label')
  const p = document.createElement('p')

  label.innerText = 'Esse foi o resultado encontrado:';
  p.innerText = resultado;

  div.classList.add('container')
  div.appendChild(label)
  div.appendChild(p)
  document.body.appendChild(div)
}

btn.addEventListener('click', showData);

