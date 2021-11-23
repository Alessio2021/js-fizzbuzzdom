const container = document.querySelector(".container");
const list = document.querySelector(".list");
const div = document.createElement('div');

// creo 100 numeri e li stampo

for (let i = 0; i <= 100; i++) {
    const li = document.createElement('li');
    li.classList.add ("box");
    list.append(li)
};