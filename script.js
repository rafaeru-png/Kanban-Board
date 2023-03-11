// Código original

// Seleciona todos os botões de adicionar tarefa
const addTaskButtons = document.querySelectorAll('.kanban-add-card button');

// Seleciona todos os campos de texto de adicionar tarefa
const addTaskTextareas = document.querySelectorAll('.kanban-add-card textarea');

// Adiciona um event listener para cada botão de adicionar tarefa
addTaskButtons.forEach(button => {
  button.addEventListener('click', addTask);
});

// Adiciona um event listener para cada campo de texto de adicionar tarefa
addTaskTextareas.forEach(textarea => {
   textarea.addEventListener('keypress', event => {
     if (event.key === 'Enter') {
       addTask(event);
     }
   });
 });

// Função para adicionar uma tarefa
function addTask(event) {
  const textarea = event.target.parentNode.querySelector('textarea');
  const column = event.target.parentNode.parentNode.querySelector('.kanban-cards');
  const taskText = textarea.value.trim();
  
  if (taskText !== '') {
    const task = document.createElement('div');
    task.classList.add('kanban-card');
    task.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task-button');
    deleteButton.innerHTML = '&times;';

    deleteButton.addEventListener('click', deleteTask);

    task.appendChild(deleteButton);

    column.appendChild(task);
    textarea.value = '';
  }
}

// Função para remover uma tarefa
function deleteTask(event) {
  const task = event.target.parentNode;
  task.parentNode.removeChild(task);
}
