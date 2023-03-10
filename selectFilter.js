//When the Toggle-All button to the left of the input is clicked.
const clickAllAsCompleted = document.querySelector("#input-toggle")
clickAllAsCompleted.onclick = event => {

    //Toggle All & Mark as Completed
    if (clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");

        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            checkbox.checked = true;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("active", "completed")
                countToDo -= 1;
            }
        }
        counter();
    }
    //Untoggle All & Mark as Active
    if (!clickAllAsCompleted.checked) {
        const toggleAllCompleted = document.querySelectorAll("#toggle-done");

        for (let i = 0; i < toggleAllCompleted.length; i++) {
            const checkbox = toggleAllCompleted[i]
            checkbox.checked = false;

            const todo = document.querySelectorAll("#todo-task");
            for (let task of todo) {
                task.classList.replace("completed", "active")
                countToDo++;
            }
        }
        counter();
    }
}


const clickAll = document.querySelector("#all")
const clickActive = document.querySelector("#active");
const clickCompleted = document.querySelector("#completed");
const clickClearCompleted = document.querySelector("#clearCompleted");

function clearSelected() {
    clickAll.classList.remove("selected")
    clickActive.classList.remove("selected")
    clickCompleted.classList.remove("selected")
}

//Display all to-do tasks
clickAll.onclick = event => {
    clearSelected();
    clickAll.setAttribute("class", "selected")

    showAll();
}

//Display only active to-do tasks
clickActive.onclick = event => {
    clearSelected();
    clickActive.classList.add("selected")

    showAll();
    hideCompleted();
}

//Display only completed to-do tasks
clickCompleted.onclick = event => {
    clearSelected();
    clickCompleted.classList.add("selected")

    showAll();
    hideActive();
}

//Delete all toggled to-do tasks
clickClearCompleted.onclick = event => {
    console.log('onclick clear btn')

    deleteCompleted();
    counter();
}

function showAll() {
    const showAllActiveCompleted = document.querySelectorAll("#todo-task");
    for (var i = 0; i < showAllActiveCompleted.length; i++) {
        showAllActiveCompleted[i].classList.remove('hide');
    }
}

function hideCompleted() {
    showAll();

    const showAllCompleted = document.querySelectorAll(".completed");
    for (var i = 0; i < showAllCompleted.length; i++) {
        showAllCompleted[i].classList.add('hide');
    }

}

function hideActive() {
    showAll();

    const showAllActive = document.querySelectorAll(".active");
    for (var i = 0; i < showAllActive.length; i++) {
        showAllActive[i].classList.add('hide');
    }
}

//Retrieve all completed to-do tasks and delete them
function deleteCompleted() {
    const allCompletedTodo = document.querySelectorAll(".completed");

    console.log('remove call function')
    for (let i = 0; i < allCompletedTodo.length; i++) {
        allCompletedTodo[i].remove();
    }
}