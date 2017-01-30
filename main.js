var resultsDiv = document.getElementById("answer");

function add(){
  var i = (Number(valueOne.value) + Number(valueTwo.value))
  resultsDiv.innerHTML = i;
}

calculateButton.addEventListener('click', add);
