const container = document.querySelector(".container");
const list = document.querySelector(".list");

// creo 100 numeri e li stampo

for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    li.classList.add ("box", "item");
    list.append(li);
    li.append(i);
    
    // se multiplo di 3 e 5 appare FIZZBUZZ in VIOLA
    if (i % 3 == 0 && i % 5 == 0) {
        li.classList.add ('violet');
        li.innerHTML = 'FizzBuzz';

    // se multipo di 3 appare FIZZ in VERDE
    } else if (i % 3 == 0){
        li.classList.add ('green');
        li.innerHTML = 'Fizz';

    // se multiplo di 5 appare BUZZ in GIALLO
    } else if (i % 5 == 0){
        li.classList.add ('yellow');
        li.innerHTML = 'Buzz';
    } else {

    };
};