const input = document.querySelector('#cep');
const btn = document.querySelector('button');

let cepData = {};
let logradouro = '';
let bairro = '';
let localidade = '';
let uf = '';
let resultado = [];

const divResultado = document.querySelector('.resultado');
const span = document.querySelector('span');

function promise(url) {
  return fetch(url).then((response) => response.json());
}

function setValues() {
  logradouro = cepData.logradouro;
  bairro = cepData.bairro;
  localidade = cepData.localidade;
  uf = cepData.uf;

  resultado.push(logradouro, bairro, localidade, uf);
  resultado = resultado.join(', ').toString();

  span.innerText = resultado;
}

function getCEP(event) {
  event.preventDefault();
  let cepUser = input.value;
  promise(`https://viacep.com.br/ws/${cepUser}/json/`)
    .then((cep) => {
      cepData = cep;
    })
    .then(() => setValues());
}

function showData() {
  getCEP(event);

  divResultado.style.display = 'block';
  divResultado.classList.add('mostra');

  cepData = {};
  logradouro = '';
  bairro = '';
  localidade = '';
  uf = '';
  resultado = [];
}

btn.addEventListener('click', showData);
