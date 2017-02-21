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
				event.currentTarget.classList.toggle('clicked');
				document.getElementById("form-control").focus();//focuses the cursor on the input field when card is clicked.
		
			}//close of the if statement
		});//close of the color change event listener function
	}//close of the for loop
			

	var matchingDescription = document.getElementById("form-control");//grabbing the input field
		// console.log("this is the input field", matchingDescription);//logging to see that I'm grabbing the correct thing
		matchingDescription.addEventListener('keyup', function (event) {//adding the listener to the keyup of keys typed in the input field
			// console.log("the event the listener is looking for", event);
			 var newText = event.currentTarget.value;
			 console.log("this is the newText", newText);//this is logging the input in real time
			 //need to target the card with clicked class and then target the paragraph with mirror class, then set the value of mirror to equal newText
		var descriptionToBeMirrored = document.getElementsByClassName('clicked');//grabbing the card that has the class clicked and, more specifically, grabbing the description's <p> tag with the class mirror
			$("div").children("p.mirror").html(newText);
		// newText = descriptionToBeMirrored.innerHtml;
		// console.log("this is the newText.value", newText.value);
		// console.log("this is the clicked card that is going to be mirrored", descriptionToBeMirrored);
	// 		cardWithClickedClass = matchingDescription.value; //the this is referring to the input that the 'keypress' is listening for

	});//close of duplication event listener



	};//close of the activateEvents function. the mirror input function needs to go in here





		//setting the event listener to start performing when the user starts to type, so that the input is reflected in real time on the car card's description. 
		//Once the user clicks on a card and the css classes are applied, I want the description on the selected card to reflect the input in the text field. 
		//Upon keypress, the description of the selected card should mirror what is being typed in the input field (I'm thinking that I should specify this by using the 'clicked' class in an if statement or some kind of conditional, maybe this would be a good time for a ternary conditional)


	

	
	


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
