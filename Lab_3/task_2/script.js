const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") return;

        // create elements
        const li = document.createElement("li");
        const taskDiv = document.createElement("div");
        const checkbox = document.createElement("input");
        const span = document.createElement("span");
        const deleteBtn = document.createElement("button");

        // setup
        checkbox.type = "checkbox";
        span.textContent = text;
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";
        taskDiv.className = "task";

        // append
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(span);
        li.appendChild(taskDiv);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // checkbox action
        checkbox.addEventListener("change", function () {
            span.classList.toggle("done");
        });

        // delete action
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        taskInput.value = "";
    }