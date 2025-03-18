// Step 1: Get references to HTML elements
const addTodoBtn = document.getElementById('addTodoBtn'); // Button to add a to-do
const todoInput = document.getElementById('todoInput'); // Input field where user types a to-do
const todoList = document.getElementById('todoList'); // The div where to-dos will be displayed

// Step 2: Add an event listener for the button click
addTodoBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim(); // Get the input value and remove extra spaces

    // Step 3: Check if input is empty
    if (todoText) {
        // Step 4: Send a POST request to add the new to-do
        fetch('http://localhost:3000/todos', {
            method: 'POST', // This specifies that we're sending new data
            headers: {
                'Content-Type': 'application/json', // Tells the server we're sending JSON data
            },
            body: JSON.stringify({ // Convert JavaScript object to JSON format
                title: todoText, // The to-do text the user entered
                completed: false // New to-do starts as not completed
            }),
        })
        .then(response => response.json()) // Step 5: Convert the response to JSON
        .then(newTodo => {
            // Step 6: Display the new to-do in the UI
            const todoItem = document.createElement('div'); // Create a new <div> for the to-do
            todoItem.textContent = newTodo.title; // Set the text to the new to-do title
            todoList.appendChild(todoItem); // Add the new to-do to the page
            todoInput.value = ''; // Clear the input field after adding
        })
        .catch(error => console.error('Error adding todo:', error)); // Step 7: Handle errors
    }
});
