const input = document.querySelector('#cep');
const btn = document.querySelector('button');

let cepData = {};
let logradouro = '';
let bairro = '';
let localidade = '';
let uf = '';
let resultado = [];

const p = document.createElement('p');

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
  console.log(resultado);

  p.innerText = resultado;
}

function getCEP(event) {
  event.preventDefault();
  let cepUser = input.value;
  console.log(cepUser);
  promise(`https://viacep.com.br/ws/${cepUser}/json/`)
    .then((cep) => {
      cepData = cep;
    })
    .then(() => setValues());
}

function showData() {
  getCEP(event);

  const div = document.createElement('div');
  const label = document.createElement('label');

  label.innerText = 'Esse foi o resultado encontrado:';

  div.classList.add('container');
  div.appendChild(label);
  div.appendChild(p);

  const verifica = document.querySelector('div');
  console.log(verifica);
  if (verifica == null) {
    console.log('teste');
    document.body.appendChild(div);
  }

  cepData = {};
  logradouro = '';
  bairro = '';
  localidade = '';
  uf = '';
  resultado = [];
}

btn.addEventListener('click', showData);
