// Async function to fetch todos from the API
async function fetchTodos() {
    try {
        console.log("🔵 Fetching todos...");
        document.getElementById("status").innerText = "⏳ Fetching todos...";

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }

        const todos = await response.json();
        console.log(todos)
        console.log("✅ Todos fetched successfully");
        return todos;
    } catch (error) {
        console.error("❌ Error:", error);
        document.getElementById("status").innerText = "❌ Error fetching todos. Please try again.";
        throw error;
    }
}

// Function to load todos and display them in the browser
async function loadTodos() {
    try {
        // Get the list of todos from the API
        const todos = await fetchTodos();

        // Get the container where we will show the todos
        const todoListElement = document.getElementById("todoList");

        // Clear any existing todos in the list
        todoListElement.innerHTML = '';

        // Loop through each todo and create a list item
        todos.forEach(todo => {
            const todoItem = document.createElement("li");
            todoItem.classList.add("todo-item");
            if (todo.completed) {
                todoItem.classList.add("completed");
            }

            // Set the content of the todo item
            todoItem.innerHTML = `<strong>Todo #${todo.id}:</strong> ${todo.title}`;

            // Append the todo item to the list
            todoListElement.appendChild(todoItem);
        });

        document.getElementById("status").innerText = `${todos.length} Todos loaded!`;
    } catch (error) {
        console.log("❌ Something went wrong while displaying the todos.");
    }
}