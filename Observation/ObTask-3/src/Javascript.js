// Selecting elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Add Task button event listener
addTaskBtn.addEventListener("click", function () {

    // Get the task entered by the user
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");

    // Add class to list item
    listItem.classList.add("task-item");

    // Create task text
    const task = document.createElement("span");
    task.classList.add("task-text");
    task.textContent = taskText;

    // Create Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    // Complete button event listener
    completeBtn.addEventListener("click", function () {

        task.classList.toggle("completed");

    });


    // Delete button event listener
    deleteBtn.addEventListener("click", function () {

        listItem.remove();

        // Show empty message if no tasks remain
        checkEmptyList();

    });


    // Add elements to the list item
    listItem.appendChild(task);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);

    // Add list item to the task list
    taskList.appendChild(listItem);

    // Clear input box
    taskInput.value = "";

    // Hide empty message
    checkEmptyList();
});


// Function to check whether task list is empty
function checkEmptyList() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}