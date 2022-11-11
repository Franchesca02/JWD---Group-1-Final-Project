

  const inputName = document.getElementById('name');
  const Name = inputName.value;

  const inputDescription = document.getElementById('description');
  const description = inputDescription.value;

  const inputAssignedTo = document.getElementbyId('assignedTo');
  const assignedTo = inputAssignedTo.value;

  const inputDate = document.getElementById('dueDate');
  const dueDate = inputDate.value;

  const taskButton = document.getElementById('submitButton');

  const success = document.getElementById('success');
  const danger = document.getElementById('danger');

 

  function validFormFieldInput(data){

    if (data.value === ''){
        success.hidden = true;
        danger.hidden = false;
        danger.innerHTML = 'Empty Fields!';
        
  } else {
    success.hidden = false;
    danger.hidden = true;
    success.innerHTML = 'Submitted!';
  }
}

taskButton.onclick = () => {
    validFormFieldInput(Name);
    validFormFieldInput(description);
    validFormFieldInput(assignedTo);
    validFormFieldInput(dueDate);
}
=======
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
    

