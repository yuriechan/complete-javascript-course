const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h,...boxes]
console.log(all);
const array = Array.from(all)
console.log(array)

Array.from(all).forEach(cur => cur.style.color = 'blue');
