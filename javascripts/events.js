"use strict"; 
// console.log("event hooked up to index");
//////////////////////////////////////////////////////////////////////
////////this iife is building all of the event listeners//////////////
///////////////////////////////////////////////////////////////////////
var CarLot = (function (oldCarLot) {
// console.log("test3");
//the event listeners will go on this page
	var selectedCarCard = document.getElementsByClassName("col-sm-4");
   var inputEl = document.getElementById("form-control");//focuses the cursor on the input field when card is clicked.
oldCarLot.activateEvents = function () {
	//set event listeners here, and call all functions here 
	


		console.log("selectedCarCard", selectedCarCard);

		for(var i = 0; i < selectedCarCard.length; i++){
			selectedCarCard[i].addEventListener('click', function (event) {
				   var currentCar = event.currentTarget;
				   oldCarLot.colorChange(currentCar);
			
			});//close of the color change event listener function

		}//close the for loop

		oldCarLot.colorChange = function (currentCar) {
			for(var i = 0; i < selectedCarCard.length; i++){
				selectedCarCard[i].classList.remove('clicked');
			}
				   // console.log("outputTarget", outputTarget);
				   event.currentTarget.classList.add('clicked');
				   oldCarLot.mirrorInput(currentCar);	

		};
		oldCarLot.mirrorInput = function(currentCar){
		   inputEl.focus();
		   inputEl.addEventListener('keyup', function(event){

				var newText = event.currentTarget.value;//storing the value put into the input field here
				console.log("currentCar", currentCar);
				if(currentCar.classList.contains('clicked')){
				var outputTarget = currentCar.querySelector('p');

				// console.log("newText", newText);
				// console.log("outputTarget", outputTarget.html());
				outputTarget.innerHTML = newText;
			};
			});
				inputEl.value = "";
		};
	
};//close activate events
	
	


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
