// Get the DOM elements
const form = document.querySelector('form');
const input = document.querySelector('#newItem');
const list = document.querySelector('#list');

// Create an empty array to store the to-do list items
let toDoList = [];

// Add event listener to the form
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting

    // Get the input value and add it to the to-do list array
    const newItem = input.value.trim(); // remove leading/trailing whitespaces
    if (newItem !== '') {
        toDoList.push(newItem);
        input.value = ''; // clear the input field
        displayList(); // update the list on the page
    }
});

// Function to display the to-do list on the page
function displayList() {
    list.innerHTML = ''; // clear the current list on the page

    // Loop through the to-do list array and create list items for each item
    toDoList.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}
