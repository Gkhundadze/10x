/* 
    An array in JavaScript is a special type of object used to store multiple values in a single variable. 
    Arrays are ordered, meaning each value (element) has an index starting from 0 
*/

let myArray = ["Apple", "Banana", "Cherry"]; // Initial array


/* real life example
    Imagine you have a to-do list where you keep track of your daily tasks. 
    An array can store these tasks and allow you to : 
        add, 
        remove, 
        or update them.
*/


// Function to update visual display
function updateDisplay() {
    const display = document.getElementById("arrayDisplay");
    display.innerHTML = ""; // Clear previous elements

    if (myArray.length === 0) {
        display.innerHTML = "<p>No elements in array</p>";
        return;
    }

    myArray.forEach(item => {
        let li = document.createElement("li");
        li.className = "array-item";
        li.textContent = item;
        display.appendChild(li);
    });
}

// Function to add value to the end
function addToEnd() {
    // value comes from user input
    let value = document.getElementById("inputValue").value;
    if (value) {
        // Push (.push()) → Adds an item to the end.
        myArray.push(value);
        document.getElementById("inputValue").value = ""; // Clear input
        updateDisplay();
    } else {
        alert("Enter a value!");
    }
}

// Function to remove value from the end
function removeFromEnd() {
    if (myArray.length > 0) {
        // Pop (.pop()) → Removes an item from the end.
        myArray.pop();
        updateDisplay();
    } else {
        alert("Array is empty!");
    }
}

// Function to add value to the start
function addToStart() {
    let value = document.getElementById("inputValue").value;
    if (value) {
        // Unshift (.unshift()) → Adds an item to the start.
        myArray.unshift(value);
        document.getElementById("inputValue").value = ""; // Clear input
        updateDisplay();
    } else {
        alert("Enter a value!");
    }
}

// Function to remove value from the start
function removeFromStart() {
    if (myArray.length > 0) {
        // Shift (.shift()) → Removes an item from the start.
        myArray.shift();
        updateDisplay();
    } else {
        alert("Array is empty!");
    }
}

// Function to sort array
function sortArray() {
    // Sort (.sort()) → Sorts the array alphabetically.
    myArray.sort();
    updateDisplay();
}

// Function to reverse array
function reverseArray() {
    // Reverse (.reverse()) → Reverses the order.
    myArray.reverse();
    updateDisplay();
}

// Initial display
updateDisplay();