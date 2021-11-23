const container = document.querySelector(".container");
const list = document.querySelector(".list");

// creo 100 numeri e li stampo

for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    li.classList.add ("box", "item");
    list.append(li);
    li.append(i);
    
    if (i % 3 == 0 && i % 5 == 0) {
        li.classList.add ('violet');
        li.innerHTML = 'FizzBuzz';
        // fizzbuz
    } else if (i % 3 == 0){
        li.classList.add ('green');
        li.innerHTML = 'Fizz';
        // fizz
    } else if (i % 5 == 0){
        li.classList.add ('yellow');
        li.innerHTML = 'Buzz';
        // buzz
    } else {

    };
};