const input = document.querySelector('#cep');
const btn = document.querySelector('button');

let cepData = {};
let logradouro = '';
let bairro = '';
let localidade = '';
let uf = '';
let resultado = [];

const divResultado = document.querySelector('.resultado');
const label = divResultado.querySelector('label')
const span = document.querySelector('span');

function setValues() {
  logradouro = cepData.logradouro;
  bairro = cepData.bairro;
  localidade = cepData.localidade;
  uf = cepData.uf;

  resultado.push(logradouro, bairro, localidade, uf);
  resultado = resultado.join(', ').toString();

  span.innerText = resultado;
}

async function initViaCep(event) {
  event.preventDefault();
  try {
    let cepUser = input.value;
    const viaCep = await fetch(`https://viacep.com.br/ws/${cepUser}/json/`);
    cepData = await (await viaCep).json();
    setValues();

    label.innerText = 'Esse foi o resultado encontrado: ';

    cepData = {};
    logradouro = '';
    bairro = '';
    localidade = '';
    uf = '';
    resultado = [];
  }
  catch {
    label.innerText = 'O CEP digitado não foi encontrado, verifique o número e tente novamente'
    span.innerText = '';
  }
  finally {
    divResultado.style.display = 'block';
    divResultado.classList.add('mostra');
  }
}

btn.addEventListener('click', initViaCep);
