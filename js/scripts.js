function newTodoItem(){
  // get the value of the input
  let addTodoValue = $('input').val();

  if (addTodoValue === '') {
    alert('Enter a todo item!');
  } else {

    let li = $('<li></li>');
    li.addClass('todo-items');

    let deleteElement = $('<span class="delete_element">Delete</span>');
    deleteElement.on('click', function() {
      li.remove();
    });

    let completedElement = $('<span class="complete_element">Complete</span>');
    completedElement.on('click', function() {
      li.appendTo('.completed-list');
      li.addClass('.animate-fadeIn');
      completedElement.remove();


    });

    li.append(addTodoValue);
    li.append(deleteElement);
    li.append(completedElement);
    $('.todo-list').append(li);
  }
}
