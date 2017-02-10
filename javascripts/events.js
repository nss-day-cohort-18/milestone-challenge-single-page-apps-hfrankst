"use strict"; 


//////////////////////this iife is building all of the event listeners 
var CarLot = (function (oldCarLot) {

console.log("event page loading");
//the event listeners will go on this page
oldCarLot.activateEvents = function(){
// listening for the card being selected...this is the card that will increase the border and change the background color
	var matchingDescription = document.getElementsByClassName("col-sm-4");//grabbing all the card spaces in the bootstrap grid
	matchingDescription.addEventListener('keypress', function(event){
		var duplicate = document.getElementsByClassName("col-sm-4");
		console.log("description click seen");
		//set duplicate.value to equal the target of where I want to out put the text 
	});

	//creating the event listener for the increased border and background color change
	var lrgBorder = document.getElementsByClassName("col-sm-4");
		console.log("The Cards", lrgBorder);//it is in fact successfully grabbing the grid spaces
		lrgBorder.addEventListener('click', function(event){
			event.classList.toggle('clicked');
			console.log("border click seen");
	});

};//closing activateEvents function
	

	return oldCarLot;



})(CarLot || {});
