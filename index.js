function validFormFieldInput(data){

  if (typeof data !== 'string'){
        emptyField.style.visibility = 'visible';
      //alert('Fields Cannot Be Empty!');
      
  } else {
    success.style.visibility = 'visible';
    
    //alert('Submitted!');
  }
};

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();

const name = document.getElementById('name');
const description = document.getElementById('description');
const assignedTo = document.getElementById('assignedTo');
const dueDate = document.getElementById('dueDate');

const submitButton = document.getElementById('submitButton');

const success = document.getElementById('success');
const emptyField = document.getElementById('emptyField');

const newTaskForm = document.getElementById('newTaskForm');

    validFormFieldInput(name);
    validFormFieldInput(description);
    validFormFieldInput(assignedTo);
    validFormFieldInput(dueDate);
});
    
