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
	for(var i = 0; i < selectedCarCard.length; i++){
		selectedCarCard[i].addEventListener('click', function (event) {
			console.log("event.target", event.target);
			if(event.currentTarget.classList.contains("col-sm-4")){//the toggle won't work without the pipe characters and "n"..why is that?
				event.currentTarget.classList.toggle('clicked');
		
			}
		})
	}
			//if the click is on the div with this class col-sm-4 or the counter class in the carToSell variable, then toggle the 'clicked' css class 
			//I am not sure why, but add the pipe characters and the 'n' let the clicked class get applied to any child element 
				// onFocus()
				// console.log("class added");
				//I need to write code to say that only one card can be red at a time, if one card is selected once another is clicked the 'clicked' class should toggle off of the first selected card and toggle onto the second selected card
			

			

		};





		//setting the event listener to start performing when the user starts to type, so that the input is reflected in real time on the car card's description. 
		//Once the user clicks on a card and the css classes are applied, I want the description on the selected card to reflect the input in the text field. 
		//Upon keypress, the description of the selected card should mirror what is being typed in the input field (I'm thinking that I should specify this by using the 'clicked' class in an if statement or some kind of conditional, maybe this would be a good time for a ternary conditional)


	// var matchingDescription = document.getElementById("form-control");//grabbing the input field
	// console.log("this is the input field", matchingDescription);//logging to see that I'm grabbing the correct thing
	// 	matchingDescription.addEventListener('keyup', function (event) {//adding the listener to the keyup of keys typed in the input field
	// 		 var newText = event.target.value;//this event is undefined
	// 		 console.log("this is the newText", newText);
	// 		 //I need to give the description a class so that I can put it after clicked in the following variable, then I need to set the value of newText, when it is working anyway, to be the innerHTML of the description
	// 	var cardWithClickedClass = document.getElementsByClassName('mirror clicked');//grabbing the card that has the class clicked and, more specifically, grabbing the description's <p> tag with the class mirror
	// 		cardWithClickedClass = matchingDescription.value; //the this is referring to the input that the 'keypress' is listening for

	// }());

	
	// };//closing the activateEvents function


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
