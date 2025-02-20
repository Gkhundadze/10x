const baseUrl = 'https://us-central1-js04-b4877.cloudfunctions.net/'

const tasksWrapper = document.querySelector('#tasks-wrapper')




async function checkTask(endpoint,taskId) {
  try {
    const response = await fetch(baseUrl + endpoint + taskId, {method: 'POST'});
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}



async function deleteTask(endpoint,taskId) {
  try {
    const response = await fetch(baseUrl + endpoint + taskId, {method: 'DELETE'});
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

async function getAllPosts(endpoint) {
    try {
      const response = await fetch(baseUrl + endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      renderTasks(data.data, tasksWrapper)
      
      console.log(data.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  function renderTasks(data, wrapper) {
    data.forEach(element => {
      const task = document.createElement('div')
      task.setAttribute('task-id', element.id)
      task.classList.add('task-item')
      const checkbox = document.createElement('input')
      checkbox.setAttribute('type', 'checkbox')
      checkbox.checked = element.completed
      const title = document.createElement('h2')
      title.textContent = element.text
      const deleteBtn = document.createElement('button')
      deleteBtn.setAttribute('type', 'button')
      deleteBtn.textContent = 'delete'
      task.append(deleteBtn, title, checkbox)
      wrapper.append(task)
    });
  }

  getAllPosts('tasks')



  
  tasksWrapper.addEventListener('click', function(event) {
    // when user clicks on delete task button to delete it
    if (event.target && event.target.tagName === 'BUTTON') {
      console.log(event.target)
      const taskId = event.target.parentElement.getAttribute('task-id');
      deleteTask('tasks/', taskId);
    }
    // when user clicks on checkbox to check or uncheck task
    else if(event.target && event.target.tagName === 'INPUT') {
      console.log(event.target.checked)
      const taskId = event.target.parentElement.getAttribute('task-id');
      if(event.target.checked) {
        checkTask('tasks/check/', taskId)
      }else {
        checkTask('tasks/uncheck/', taskId)
      }
    }
  });
