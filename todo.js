let countToDo = 0;

const submit = document.addEventListener("submit", (event) => {
    event.preventDefault();
    createNewTodo();
    document.getElementById("todoInput").value = '';
});


function createNewTodo() {

    if (todoInput.value != '') {
        const list = document.createElement("li")
        const toggleDone = document.createElement("input");
        toggleDone.setAttribute("type", "checkbox");
        const todo = document.createElement("p");
        const crossBtn = document.createElement("span")

        list.className = "active"
        list.id = "todo-task"
        toggleDone.id = "toggle-done"
        todo.id = "todo-item"
        crossBtn.id = "crossBtn-onclick";
        crossBtn.className = "hide";

        todo.textContent = todoInput.value;
        crossBtn.textContent = '❌';

        document.querySelector("#todo-list").appendChild(list)
        list.append(toggleDone)
        list.append(todo)
        list.append(crossBtn)

        countToDo += 1;
        counter();


        
        toggleDone.addEventListener("click", function () {
            
            if (toggleDone.checked) {
                countToDo -= 1;
                counter();
                list.className = "completed";

                
                if (clickActive.classList.contains("selected")) {
                    
                    list.classList.add('hide')
                }
            }

            
            if (!toggleDone.checked) {
                countToDo += 1;
                counter();
                list.className = "active";

                
                if (clickCompleted.classList.contains("selected")) {
                    
                    list.classList.add('hide')
                }
            }
        })

        
        list.addEventListener("mouseover", function () {
            list.querySelector("#crossBtn-onclick").classList.remove("hide");
        });
        list.addEventListener("mouseleave", function (event) {
            list.querySelector("#crossBtn-onclick").classList.add("hide");
        });

        
        crossBtn.addEventListener("click", function () {
            if (!toggleDone.checked) {
                list.remove();
                countToDo -= 1;
                console.log('counter: ' + countToDo)
                counter();
            }

            if (toggleDone.checked) {
                list.remove();
                counter();
            }
        })
    }
    else {
        return;
    }
}