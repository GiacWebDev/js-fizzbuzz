

// PASSAGGI DA REALIZZARE

// 1. segnarsi gli elementi e metterli in js
// 2. creare un ciclo numerico lista da 1 a 100.
// 3. identificare i multipli di 3 e appendere in html con "Fizz"
//    identificare i multipli di 5 e appendere in html con "Buzz"
// 4. creo le 100 box che conterranno i numeri/scritte




// 1, elementi
const boxesEl = document.querySelector('.boxes');
const bgRedEl = document.querySelector('.bg-red')
const bgYellowEl = document.querySelector('.bg-yellow')
const bgGreenEl = document.querySelector('.bg-green')



// 2.
for (let i = 1; i <= 100; i++) {

  const boxEl = document.createElement('div');
  boxEl.classList.add('box');

  boxesEl.append(boxEl);

  console.log(boxEl);


  // 3-4
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    boxEl.classList.add('bgRed')
    boxEl.append('FizzBuzz');

  } else if (i % 3 === 0) {
    console.log('Fizz');
    boxEl.classList.add('bgGreenEl')
    boxEl.append('Fizz');

  } else if (i % 5 === 0 ) {
    console.log('Buzz');
    boxEl.append('Buzz');

  } else {
    console.log(i);
  }

};