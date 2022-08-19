const input = document.querySelector('#cep');
const btn = document.querySelector('button');
let cepUser = 0;

function getCEP(event) {
  event.preventDefault();
  cepUser = input.value;
  console.log(cepUser);
  promise(`https://viacep.com.br/ws/${cepUser}/json/`).then((cep) =>
    console.log(cep)
  );
}

btn.addEventListener('click', getCEP);

function promise(url) {
  return fetch(url).then((response) => response.json());
}
