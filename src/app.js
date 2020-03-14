// array of text
const changes = [
    " the first change",
    " The second change",
    " the third change",
    " the fourth change"
];

// function to change text
var change = changes[Math.floor(Math.random() * Math.floor(changes.length))];

// display on website
document.querySelector('.change').append(change);

