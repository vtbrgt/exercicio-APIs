const btn = document.querySelector('button');
const span = document.querySelector('span');

function generateJoke() {
  fetch('https://api.chucknorris.io/jokes/random').then((resolve) =>
    resolve.json().then((joke) => {
      span.innerText = '"' + joke.value + '"';
      btn.innerText = 'Próxima piada';
    })
  );
}

btn.addEventListener('click', generateJoke);
