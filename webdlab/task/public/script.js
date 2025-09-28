const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

const fetchTasks = async () => {
  const res = await fetch('/api/tasks');
  const tasks = await res.json();
  taskList.innerHTML = tasks.map(task => `
    <li>
      <strong>${task.title}</strong>
      <p>${task.description}</p>
      <button onclick="editTask(${task.id}, '${task.title}', '${task.description}')">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    </li>
  `).join('');
};

const addTask = async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description })
  });

  taskForm.reset();
  fetchTasks();
};

const editTask = async (id, currentTitle, currentDescription) => {
  const title = prompt('Edit Task Title:', currentTitle);
  const description = prompt('Edit Task Description:', currentDescription);

  if (title && description) {
    await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    });
    fetchTasks();
  }
};

const deleteTask = async (id) => {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
  fetchTasks();
};

taskForm.addEventListener('submit', addTask);
fetchTasks();