const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let error = "";
  if (name.length < 2) error = "Please enter a name with at least 2 characters.";
  else if (!emailPattern.test(email)) error = "Please enter a valid email address.";
  else if (message.length < 5) error = "Please enter a message with at least 5 characters.";

  if (error) {
    formFeedback.textContent = error;
    formFeedback.className = "feedback error";
    return;
  }

  formFeedback.textContent = "Form validated successfully! (Demo only; no message was sent.)";
  formFeedback.className = "feedback success";
});

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoFeedback = document.getElementById("todoFeedback");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = todoInput.value.trim();
  if (!taskText) {
    todoFeedback.textContent = "Please type a task first.";
    todoFeedback.className = "feedback error";
    return;
  }

  const item = document.createElement("li");
  item.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("aria-label", "Mark task as complete");

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Remove";
  deleteButton.setAttribute("aria-label", `Remove task: ${taskText}`);

  checkbox.addEventListener("change", function () {
    item.classList.toggle("completed", checkbox.checked);
  });

  deleteButton.addEventListener("click", function () {
    item.remove();
    todoFeedback.textContent = "Task removed.";
    todoFeedback.className = "feedback success";
  });

  item.append(checkbox, text, deleteButton);
  todoList.appendChild(item);
  todoInput.value = "";
  todoInput.focus();
  todoFeedback.textContent = "Task added.";
  todoFeedback.className = "feedback success";
});
