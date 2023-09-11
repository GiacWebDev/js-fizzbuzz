

// PASSAGGI DA REALIZZARE

// 1. segnarsi gli elementi e metterli in js
// 2. creare un ciclo numerico lista da 1 a 100.
// 3. identificare i multipli di 3 e appendere in html con "Fizz"
//    identificare i multipli di 5 e appendere in html con "Buzz"
// 4. creo le 100 box che conterranno i numeri/scritte




// 1, elementi
const titoloEL = document.createElement('h1')
const boxesEl = document.querySelector('.boxes');
const bgRed = document.querySelector('.bg-red');
const bgYellow = document.querySelector('.bg-yellow');
const bgGreen = document.querySelector('.bg-green');

const bodyEl = document.querySelector('body');
titoloEL.append('FizzBuzz');

// do il titolo alla pagina in h1 senza usare html

// bodyEl.innerHTML = titoloEL.innerHTML + bodyEl.innerHTML;
bodyEl.prepend = titoloEL;
console.log(titoloEL);



// 2.
for (let i = 1; i <= 100; i++) {

  const boxEl = document.createElement('div');
  boxEl.classList.add('box');

  boxesEl.append(boxEl);

  console.log(boxEl);


  // 3-4
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
    boxEl.classList.add('bgRed');
    boxEl.append('FizzBuzz');

  } else if (i % 3 === 0) {
    console.log('Fizz');
    boxEl.classList.add('bgGreen');
    boxEl.append('Fizz');

  } else if (i % 5 === 0 ) {
    console.log('Buzz');
    boxEl.classList.add('bgYellow');
    boxEl.append('Buzz');

  } else {
    boxEl.append(i);
    console.log(i);
  }

};