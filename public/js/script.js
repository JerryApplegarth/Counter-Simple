// 1. Grab the save-el paragraph and store it in a variable called saveEl
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment () {
    count += 1;
    countEl.textContent = count;
}

function save () {

    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countAndDash = count + " -  ";

    // 3. Append the countAndDash to the saveEl
    saveEl.textContent += countAndDash;
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
    
    count = 0;
    countEl.textContent = count;
    // add sum of all numbers in saveEl
    
    
}
