

// PASSAGGI DA REALIZZARE

// 1. segnarsi gli elementi e metterli in js
// 2. creare un ciclo numerico lista da 1 a 100.
// 3. identificare i multipli di 3 e appendere in html con "Fizz"
// 4. identificare i multipli di 5 e appendere in html con "Buzz"
// 5. creo le 100 box che conterranno i numeri/scritte




// 1, elementi
const boxesEl = document.querySelector('.boxes');


// 2.
for (let i = 1; i <= 100; i++) {

  const boxEl = document.createElement('div');
  boxEl.classList.add('box');

  boxesEl.append(boxEl);

  console.log(box);



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