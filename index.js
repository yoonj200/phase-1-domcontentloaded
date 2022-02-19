// Your code goes here

//Set up a DOMContentLoaded event listener that detects when HTML page has 
//loaded and document is ready to be manipulated

//Use event's callback function to target paragraph element with id="text"
//and replace text with "This is really cool!"

/* This works too. Is it better to declare text outside of the event listener...?

let text = document.getElementById('text');

document.addEventListener("DOMContentLoaded", (event) => {
  text.textContent = `This is really cool!`
})

*/

document.addEventListener(`DOMContentLoaded`, (event) => {
    let text = document.getElementById(`text`);
    text.textContent = `This is really cool!`
})