var elements = document.getElementsByTagName('button');
console.log(elements);

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'tomato';
}