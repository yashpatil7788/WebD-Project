const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList= document.getElementById('todoList');
const addTodo=()=>{
    const inputText = inputBox.value.trim();

      if(inputText.length <= 0)
      {
        alert('Please enter a valid todo.');
        return;
      }
      const li=document.createElement('li');
      const p=document.createElement('p');
      p.innerHTML = inputText;
      li.appendChild(p);


      const deleteBtn=document.createElement('button');
      deleteBtn.innerHTML='Delete';



      const editBtn=document.createElement('button');
      editBtn.innerHTML='Edit';
      editBtn.classList.add('btn');
      li.appendChild(deleteBtn);
      
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        deleteBtn.classList.add('btn');
    });
    li.appendChild(editBtn);




    editBtn.addEventListener('click', () => {
        inputBox.value = p.innerHTML; // Set the current task text in the input box
        todoList.removeChild(li); // Remove the current task
    });
        

      todoList.appendChild(li);
      inputBox.value='';
}

addBtn.addEventListener('click',addTodo);
