//var numOne = document.getElementById("valueOne");
//var num1 = Number(valueOne.value);

var resultsDiv = document.getElementById("answer");

function add(){
  var i = (Number(valueOne.value) + Number(valueTwo.value))
  resultsDiv.innerHTML = i;
}

calculateButton.addEventListener('click', add);

//var button = document.getElementById("calculateButton")
