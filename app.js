function onSave() {
  const inputElement = document.getElementById("budget");
  const amount = inputElement.value;

  // check if input is not empty
  if (!amount) {
    alert("Please enter your budget.");
    return;
  }

  // check if the input is valid number
  if (isNaN(amount)) {
    alert("Enter a valid number.");
    inputElement.value = "";
    return;
  }

  // display amount on UI
  document.getElementById("amount").innerText = amount;

  // disable the input field
  inputElement.setAttribute('disabled', '');
}