"use strict"; 

var CarLot = (function () {

console.log("event page loading");
//the event listeners will go on this page
function activateEvents (){
// listening for the card being selected...this is the card that will increase the border and change the background color
var lrgBorder = document.getElementsByClassName("col-sm-4");
console.log("is this working?", lrgBorder);
	lrgBorder.addEventListener('click', function(event){
	event.classList.toggle('.clicked');
	console.log("click seen");
});


	////////////////////////////////////////////TAKEN FROM A DIFFERENT EXERCISE TO USE AS REFERENCE WILL BE DELETED AFTER MILESTONE COMPLETION
// //4. When typing into the input field, the output div should mirror the input
// 	//grabbing the input field by id and storing its value in a variable
var mirrorInput = document.getElementById('keypress-input');
	//attaching the event listener to the input field, setting it up to run on every keyup event
mirrorInput.addEventListener('keyup', function(event){
	//creating a new variable to hold the input field info and set it equal to the output div, so that when the key is released in the input field the text is printed to the output area
	var duplicate = document.getElementById('keypress-input');
	document.getElementById('output-target').innerHTML = duplicate.value;
});




}






})(CarLot || {});