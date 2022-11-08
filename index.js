
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