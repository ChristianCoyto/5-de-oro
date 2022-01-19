const btn = document.getElementById('form__button');
const lucky = document.querySelector('.lucky__numbers');
const reset = document.getElementById('reset');
const input = document.querySelector('.form__input');
const form = document.querySelector('.form__container')


/* Listen to events */

/* Button ----> Search random numbers */

btn.addEventListener('click', (e) => {
  e.preventDefault()
  input.value.trim() ? numeroRandom() : input.value = "";
  input.focus()
  form.reset()

})

/* Key ENTER ----> Search random numbers */

input.addEventListener('keyup', function (e) {
  let keycode = e.keyCode;
  if (keycode == 13) {
    numeroRandom()
  }
})

/* Burron ----> Reset input */

reset.addEventListener('click', () => {
  lucky.innerHTML = "";
  input.focus()
  form.reset()
})

/* Function Random */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Get random numbers */

function numeroRandom() {

  const result = [];

  while (result.length < 5) {
    let number = getRandomInt(1, 48);
    if (!result.includes(number)) result.push(number)
  }

  show(result)

}

/* Show the random numbers */

function show(array) {
  let inputName = document.querySelector(".form__input").value;

  let inputResults = inputName.toUpperCase().trim()

  if (inputResults) {
    lucky.innerHTML = `<h1 class="lucky">¡MUCHA SUERTE ${inputResults}!</h1>
                        <div class="balls__container">
                        <span class="balls red"><strong>${array[0]}</strong></span>
                        <span class="balls blue"><strong>${array[1]}</strong></span>
                        <span class="balls yellow"><strong>${array[2]}</strong></span>
                        <span class="balls green"><strong>${array[3]}</strong></span>
                        <span class="balls purple"><strong>${array[4]}</strong></span>
                        </div>
                        `
  }
}








