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
	// console.log("selectedCarCard", selectedCarCard);
		for(var i = 0; i < selectedCarCard.length; i++){
			selectedCarCard[i].addEventListener('click', function (event) {
			// console.log("event.target", event.target);
			if(event.currentTarget.classList.contains("col-sm-4")){//the toggle won't work without the pipe characters and "n"..why is that?
				// $(this).attr("id", "clicked");
				event.currentTarget.classList.toggle('clicked');
				document.getElementById("form-control").focus();//focuses the cursor on the input field when card is clicked.
		
			}//close of the if statement
		});//close of the color change event listener function
	}//close of the for loop
			

	var matchingDescription = document.getElementById("form-control");//grabbing the input field
		matchingDescription.addEventListener('keyup', function (event) {//adding the listener to the keyup of keys typed in the input field
		var newText = event.currentTarget.value;//storing the value put into the input field here
		var descriptionToBeMirrored = document.getElementsByClassName('clicked');//grabbing the card that has the class clicked and, more specifically, grabbing the description's <p> tag with the class mirror
			// if($('div').hasClass('.clicked') === true){
				$('.col-sm-4').hasClass('clicked').children("p.mirror").text(newText);//I don't have a damn clue how to do this in javascript. I want to do an if statement, saying 'if the div has class of clicked and contains a paragraph with class mirror, then put the newText inside that paragraph'
				
			// };
		});//close of duplication event listener

	};//close of the activateEvents function. the mirror input function needs to go in here





		//setting the event listener to start performing when the user starts to type, so that the input is reflected in real time on the car card's description. 
		//Once the user clicks on a card and the css classes are applied, I want the description on the selected card to reflect the input in the text field. 
		//Upon keypress, the description of the selected card should mirror what is being typed in the input field (I'm thinking that I should specify this by using the 'clicked' class in an if statement or some kind of conditional, maybe this would be a good time for a ternary conditional)


	

	
	


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
