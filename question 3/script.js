








const number = document.getElementById('number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let count = 0;

function update() {
 number.innerHTML = count
}

function decrease1() {
  count--;
  update();
  
}

function reset1() {
  count = 0;
  update();
}

function increase1() {
  count++;
  update();
}

decrease.addEventListener('click', decrease1);
reset.addEventListener('click', reset1);
increase.addEventListener('click', increase1);


