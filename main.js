let content = document.querySelector('#content');
console.log(content);

let content_2 = document.querySelectorAll('#content')[0];

console.log(content_2);

let li = document.querySelector('li.important');

console.log(li);

let li_2 = document.querySelectorAll('li.important');

console.log(li_2);

let ul = document.querySelectorAll('li');
console.log(ul);
let longueur;
ul.forEach(element => {
    longueur =element.length;
    let max = element.innerText.slice(-1 ,longueur).toUpperCase();
    let min = element.innerText.slice(longueur, -1)
    console.log(min + max);
});

let p =  document.getElementById("content").getElementsByClassName("grandParagraphe")[0];


console.log(p);
