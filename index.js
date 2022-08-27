// console.log(document.getElementsByTagName('h1'));
const pText = document.getElementById('paragraph');
pText.innerText = "I am learning DOM";
const paragraphs = document.getElementsByTagName('p');
console.log(Array.prototype.slice.call(paragraphs, 1));
