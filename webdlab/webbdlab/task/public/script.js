const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const API = '/api/tasks';

async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();
  taskList.innerHTML = '';
  tasks.forEach(addTaskToDOM);
}

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.dataset.id = task.id;

  const span = document.createElement('span');
  span.textContent = task.title;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = async () => {
    const newTitle = prompt('Edit task:', task.title);
    if (newTitle) {
      await fetch(`${API}/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle })
      });
      fetchTasks();
    }
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = async () => {
    await fetch(`${API}/${task.id}`, { method: 'DELETE' });
    fetchTasks();
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

taskForm.onsubmit = async (e) => {
  e.preventDefault();
  const title = taskInput.value.trim();
  if (!title) return;
  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  taskInput.value = '';
  fetchTasks();
};

fetchTasks();
