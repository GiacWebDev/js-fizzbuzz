

// PASSAGGI DA REALIZZARE

// 1. segnarsi gli elementi e metterli in js
// 2. creare un ciclo numerico lista da 1 a 100.
// 3. identificare i multipli di 3 e appendere in html con "Fizz"
// 4. identificare i multipli di 5 e appendere in html con "Buzz"

// 1, elementi
const listaE = document.querySelector('.lista');
const liE = document.createElement('li')

// 2.
for (let i = 1; i <= 100; i++) {
  console.log(i);

  // 3
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');

  } else if (i % 3 === 0) {
    console.log('Fizz')

  } else if (i % 5 === 0 ) {
    console.log('Buzz')

  } else {
    console.log(i)
  }

};