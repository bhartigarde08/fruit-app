function onSave() {
  const inputElement = document.getElementById("budget");
  const amount = inputElement.value;
  if (!amount) {
    alert("Please enter your budget.");
    return;
  }
  document.getElementById("amount").innerText = amount;

  inputElement.setAttribute('disabled', '');
}