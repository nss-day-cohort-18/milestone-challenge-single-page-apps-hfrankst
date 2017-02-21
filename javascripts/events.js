"use strict"; 
// console.log("event hooked up to index");
//////////////////////////////////////////////////////////////////////
////////this iife is building all of the event listeners//////////////
///////////////////////////////////////////////////////////////////////
var CarLot = (function (oldCarLot) {
// console.log("test3");
//the event listeners will go on this page
	var selectedCarCard = document.getElementsByClassName("col-sm-4");
oldCarLot.activateEvents = function () {
	//set event listeners here, and call all functions here 
	


		console.log("selectedCarCard", selectedCarCard);

		for(var i = 0; i < selectedCarCard.length; i++){
			selectedCarCard[i].addEventListener('click', function (event) {
				   var inputEl = document.getElementById("form-control");//focuses the cursor on the input field when card is clicked.
				   inputEl.focus();
				   var outputTarget = $(event.currentTarget).find('p');
				   console.log("outputTarget", outputTarget);
				   event.currentTarget.classList.toggle('clicked');						
			inputEl.addEventListener('keyup', function(event){
				var newText = event.currentTarget.value;//storing the value put into the input field here
				console.log("newText", newText);
				outputTarget.innerHTML = newText.value;
				
			});
			});//close of the color change event listener function
		}//close the for loop



				// console.log("this is the outputTarget", outputTarget);
					// event.currentTarget.classList.toggle('clicked');
	// window.onload = function () {
	// 	var descriptionToBeMirrored = document.getElementsByClassName('mirror');//grabbing the card that has the class clicked 
	// 		descriptionToBeMirrored.addEventListener('click', function (event) {
	// 			console.log("descriptionToBeMirrored", event.target);
	// 		}) 
	// 	var matchingDescription = document.getElementById("form-control");//grabbing the input field
	// 		matchingDescription.addEventListener('keyup', function (event) {//adding the listener to the keyup of keys typed in the input field
	// 		descriptionToBeMirrored.innerHTML = newText;
				
	// 	});
	// }

	//use child nodes to grab the paragraph rather than the mirror class
		// console.log(descriptionToBeMirrored);
		// if()
				// console.log("newText", newText);

				// .children("p.mirror").text(newText);//I don't have a damn clue how to do this in javascript. I want to do an if statement, saying 'if the div has class of clicked and contains a paragraph with class mirror, then put the newText inside that paragraph'
				
			// };
	

	
}//close activate events
	
	


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
