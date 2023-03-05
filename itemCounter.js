function counter() {
    // Get references to relevant UI elements
    const todoCounter = document.querySelector('#counter');
    const todoTasks = document.querySelectorAll("#todo-task");
    const completedTodos = document.querySelectorAll("#toggle-done:checked");
    const incompleteTodos = document.querySelectorAll("#toggle-done:not(:checked)");
    const visibilityFilterOption = document.querySelector("#filter-option");
    const visibilityClearBtn = document.querySelector("#clearCompleted");
    const visibilityToggleAllBtn = document.querySelector("#input-toggle");
  
    // If there are no todos, hide filter and toggle all buttons and disable toggle all button
    if (todoTasks.length === 0) {
      visibilityFilterOption.classList.add('hide');
      visibilityToggleAllBtn.checked = false;
      visibilityToggleAllBtn.disabled = true;
      visibilityToggleAllBtn.style.visibility = 'hidden';
      visibilityClearBtn.classList.add('hide');
      return;
    }
  
    // Show filter and toggle all buttons and enable them
    visibilityFilterOption.classList.remove('hide');
    visibilityToggleAllBtn.disabled = false;
    visibilityToggleAllBtn.style.visibility = 'visible';
  
    // If there are completed todos, show clear completed button
    visibilityClearBtn.classList.toggle('hide', completedTodos.length === 0);
  
    // If there is only one uncompleted todo, display "1 item left"
    if (incompleteTodos.length === 1) {
      todoCounter.textContent = '1 item left';
      visibilityToggleAllBtn.checked = false;
    }
  
    // If there are more than one or no uncompleted todos, display "<number> items left"
    if (incompleteTodos.length > 1 || incompleteTodos.length === 0) {
      todoCounter.textContent = `${incompleteTodos.length} items left`;
    }
  
    // If all todos are completed, check the toggle all button
    visibilityToggleAllBtn.checked = completedTodos.length === todoTasks.length;
  }
  