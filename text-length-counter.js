function textLengthCounter() {
  
  const input = document.getElementById("inputText").value.length;
  
  //.innerText & .textContent are the same things.
  document.getElementById("result").textContent = `The length of the text is total: ${input}`;
}
