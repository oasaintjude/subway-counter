let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")
let count = 0

// For counting the number of people entering the sub way(COUNT)
function increment() {
    count += 1
    countEl.textContent = count
}

// To save the records of COUNT 
function save() {
    let separator = count + " - "
    saveEl.textContent += separator
    // Resets the count to zero after saving the records
    count = 0
    countEl.textContent = 0
}

// To reset all values to zero
function reset() {
    count = 0
    countEl.textContent = 0
}


// let firstName = "Saint-Jude";
// let lastName = "Obia-Amauwa";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let name = "Linda";
// let greeting = "Hi there";

// function tap() {
//     call = greeting + ", " + name + "!";
//     console.log(call);
// }
// tap()

// let myPoints = 3;

// function add3Points() {
//     myPoints = myPoints + 3;
// }
// add3Points();
// add3Points();
// add3Points();
// function remove1Point() {
//     myPoints = myPoints - 1;
// }
// remove1Point();
// remove1Point();

// console.log(myPoints)
