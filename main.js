var numOne = document.getElementById("value-one");
var numTwo = document.getElementById("value-two");
var calButton = document.getElementById("cal-butt");
var resultsDiv = document.getElementById("answer");

function add(){
  var i = (Number(numOne.value) + Number(numTwo.value))
  resultsDiv.innerHTML = i;
}

calButton.addEventListener('click', add);
