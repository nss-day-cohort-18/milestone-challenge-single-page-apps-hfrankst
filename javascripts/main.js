"use strict";
// console.log("main hooked up to index");
////////////////this page is like a big switchboard, invoking all the functions that were built on the other pages
function populatePage (inventory) {
// console.log("test4");
  //CarLot is being seen as undefined.....why tho??????
	CarLot.loadInventory();//grunt is saying this is undefined at the moment and I don't know why, but I don't care because it is still printed the data onto the html
	CarLot.activateEvents();
	CarLot.carCard();
	console.log("inventory function invoked");
}
////event listeners, they're functions will be found on the events.js page
var matchingDescription = document.getElementsByClassName("col-sm-4");//grabbing all the card spaces in the bootstrap grid
	matchingDescription.addEventListener('keypress', CarLot.activateEvents.Mirror());

populatePage();