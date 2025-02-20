const baseUrl = 'https://us-central1-js04-b4877.cloudfunctions.net/';
const tasksWrapper = document.querySelector('#tasks-wrapper');
const taskInput = document.querySelector('#task-input'); // Input field
const taskSubmit = document.querySelector('#task-submit'); // Submit button

// Reusable Fetch Function
async function fetchData(endpoint, method = 'GET', body = null) {
  try {
    const options = { method };
    if (body) options.body = JSON.stringify(body);
    if (method !== 'GET') options.headers = { 'Content-Type': 'application/json' };

    const response = await fetch(baseUrl + endpoint, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function createTask(endpoint, taskText) {
  return fetchData(endpoint, 'POST', { text: taskText });
}

async function checkTask(endpoint, taskId) {
  return fetchData(endpoint + taskId, 'POST');
}

async function deleteTask(endpoint, taskId) {
  return fetchData(endpoint + taskId, 'DELETE');
}

async function getAllPosts(endpoint) {
  try {
    const data = await fetchData(endpoint);
    // Sort tasks by create_time (newest first)
    const sortedTasks = data.data.sort((a, b) => new Date(b.create_time) - new Date(a.create_time));
    renderTasks(sortedTasks, tasksWrapper);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to render tasks
function renderTasks(data, wrapper) {
  wrapper.innerHTML = ''; // Clear previous tasks before rendering
  data.forEach(renderTask);
}

// Function to create a task element
function renderTask(element) {
  const task = document.createElement('div');
  task.setAttribute('task-id', element.id);
  task.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = element.completed;

  const title = document.createElement('h2');
  title.textContent = element.text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('type', 'button');
  deleteBtn.textContent = 'delete';

  task.append(deleteBtn, title, checkbox);
  tasksWrapper.append(task); // Appends in sorted order from renderTasks()
}

// Event Listener for Delete and Checkbox Actions
tasksWrapper.addEventListener('click', function (event) {
  const task = event.target.parentElement;
  const taskId = task.getAttribute('task-id');

  // Delete Task
  if (event.target.tagName === 'BUTTON') {
    task.classList.add('removing'); // Add animation class
    setTimeout(() => {
        deleteTask('tasks/', taskId).then(() => task.remove());
    }, 400); // Wait for animation to finish before removing
}

  // Toggle Task Completion
  else if (event.target.tagName === 'INPUT') {
    const checkbox = event.target;

    if (checkbox.checked) {
      checkTask('tasks/check/', taskId).catch(() => (checkbox.checked = false));
    } else {
      checkTask('tasks/uncheck/', taskId).catch(() => (checkbox.checked = true));
    }
  }
});
// listening on keypress "enter"
taskInput.addEventListener('keydown', async function (event) {
  if (event.key === 'Enter') { 
      event.preventDefault(); // Prevents accidental form submission (if inside a form)
      taskSubmit.click(); // Triggers the existing submit button click event
  }
});
// Create Task Event Listener
taskSubmit.addEventListener('click', async function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  try {
    const newTask = await createTask('tasks/create', taskText);
    getAllPosts('tasks'); // Re-fetch and re-sort tasks after adding a new one
    taskInput.value = ''; // Clear input field
  } catch (error) {
    console.error('Failed to create task:', error);
  }
});

// Fetch and Display Tasks on Load
getAllPosts('tasks');
