const todoList = [];

const addTask = () => {
  const taskName = document.getElementById("task-name").value;
  todoList.push({
    name: taskName,
    completed: false
  });

  updateTodoList();

  // Show the list when the button is clicked
  document.getElementById("todo-list").classList.remove("hidden");
};

const updateTodoList = () => {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  for (const task of todoList) {
    const taskElement = document.createElement("li");
    taskElement.textContent = task.name;

    if (task.completed) {
      taskElement.classList.add("completed");
    }

    todoListElement.appendChild(taskElement);
  }
};

document.getElementById("add-task-button").addEventListener("click", addTask);

// Show the list when the page loads
updateTodoList();
