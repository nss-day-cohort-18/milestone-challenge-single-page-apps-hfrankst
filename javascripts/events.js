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
			console.log("this card has been clicked");
			//if the click is on the div with this class col-sm-4, then add the clicked css class 
			if(event.target.className === "col-sm-4"){
				event.target.classList.add('clicked');
				console.log("class added");
			}
		});







	var matchingDescription = document.getElementById("form-control");//grabbing the input field
	matchingDescription.addEventListener('keypress', function (argument) {//setting the event listener to start performing when the user starts to type, so that the input is reflected in real time on the car card's description. 
		//Once the user clicks on a card and the css classes are applied, I want the description on the selected card to reflect the input in the text field. 
	}());








	// console.log("matchingDescription", matchingDescription);

	// Mirror:  function(event){
	// 	var duplicate = document.getElementsByClassName("form-control");//grabbing the input from the input fieldventory.description);
		
	// 	var carInventory = CarLot.returnInventory();//this returnInventory function is from the bottom of the CarLot.js
	// 	for(var i = 0; i < carInventory.length; i++){
	// 		carInventory.description;
	// 	}
	// 	carInventory = duplicate.value;
	// 	console.log("description click seen");

	// 	//set duplicate.value to equal the target of where I want to out put the text 
	// }





	//creating the event listener for the increased border and background color change
	
	
	};//closing the activateEvents function


	

	return oldCarLot;


})(CarLot || {});

// CarLot.activateEvents.Mirror();
