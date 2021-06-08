function newTodoItem(){
  // get the value of the input
  let addTodoValue = $('input').val();
// conditional for checking if input isnt filled out
  if (addTodoValue === '') {
    alert('Enter a todo item!');
  } else {
// else, add a todo to the list
    let li = $('<li></li>');
    li.addClass('todo-items');
// delete button included
    let deleteElement = $('<span class="delete_element">Delete</span>');
    deleteElement.on('click', function() {
      li.remove();
    });
// complete button to complete todos
    let completedElement = $('<span class="complete_element">Complete</span>');
    completedElement.on('click', function() {
      li.appendTo('.completed-list');
      completedElement.remove();


    });
// append elements together
    li.append(addTodoValue);
    li.append(deleteElement);
    li.append(completedElement);
    $('.todo-list').append(li);
  }
}
