"use strict"; 
// console.log("event hooked up to index");
//////////////////////////////////////////////////////////////////////
////////this iife is building all of the event listeners//////////////
/////////////////////////////////////////////////////////////////////// 
var CarLot = (function (oldCarLot) {
// console.log("test3");
//the event listeners will go on this page
oldCarLot.activateEvents = function () {

	//the first event listener needs to recognize the click of the car card and apply css classes for an increased border and a background change, use the class .clicked. Also, the input field needs to be cleared and the cursor should focus on input. 
	var selectedCarCard = document.getElementsByClassName("col-sm-4");
	console.log("selectedCarCard", selectedCarCard);
		document.addEventListener('click', function (event) {
			//if the click is on the div with this class col-sm-4 or the counter class in the carToSell variable, then toggle the 'clicked' css class 
			//I am not sure why, but add the pipe characters and the 'n' let the clicked class get applied to any child element 
				console.log("event.target", event.target);
			if(event.target.className === "col-sm-4" || "n"){
				event.target.classList.toggle('clicked');
				onFocus()
				// console.log("class added");
				//I need to write code to say that only one card can be red at a time, if one card is selected once another is clicked the 'clicked' class should toggle off of the first selected card and toggle onto the second selected card
			}
		});







	var matchingDescription = document.getElementsByClassName("form-control");//grabbing the input field
		matchingDescription.addEventListener('keypress', function (event) {//setting the event listener to start performing when the user starts to type, so that the input is reflected in real time on the car card's description. 
		//Once the user clicks on a card and the css classes are applied, I want the description on the selected card to reflect the input in the text field. 
		//Upon keypress, the description of the selected card should mirror what is being typed in the input field (I'm thinking that I should specify this by using the 'clicked' class in an if statement or some kind of conditional, maybe this would be a good time for a ternary conditional)

		var cardWithClickedClass = document.getElementsByClassName('clicked');
			matchingDescription = cardWithClickedClass.value; //the this is referring to the input that the 'keypress' is listening for

	}());


 	//set duplicate.value to equal the target of where I want to out put the text 


		
	// 	carInventory = duplicate.value;
	// 	console.log("description click seen");

	// }


	
	
	};//closing the activateEvents function


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
