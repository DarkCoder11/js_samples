let inputValue;
let shareArr = [];
add.disabled = true;

shareInput.addEventListener("input", e => {
  inputValue = Number(shareInput.value);

  if (inputValue) {
    add.disabled = false;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
  let sum;

  inputValue = Number(shareInput.value);

  if (inputValue) {
    shareArr.push(inputValue);
    shareView.innerHTML = "[" + shareArr + "]";

    // Calculation algorithm
    sum = shareArr.reduce((prevValue, nextValue) => prevValue + nextValue, 0);
    percentView.innerHTML =
      "[" +
      shareArr.map(shareItem => ((shareItem * 100) / sum).toFixed(3)) +
      "]";
  }

  shareInput.value = "";
  add.disabled = true;
});

btnReset.addEventListener("click", e => {
  e.preventDefault();

  shareArr = [];
  add.disabled = true;
  shareInput.value = "";
  shareView.innerHTML = "";
  percentView.innerHTML = "";
});
