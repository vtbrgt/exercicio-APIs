const btn = document.querySelector('button');
const span = document.querySelector('span');

async function generateJoke() {
  const jokeData = await fetch('https://api.chucknorris.io/jokes/random')
  const joke = await (await jokeData).json()
  span.innerText = '"' + joke.value + '"';
  btn.innerText = 'Próxima piada';
}

btn.addEventListener('click', generateJoke);
