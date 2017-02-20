"use strict";
// console.log("main hooked up to index");
////////////////this page is like a big switchboard, invoking all the functions that were built on the other pages
function populatePage (inventory) {
// console.log("test4");
	// console.log("inventory function invoked");
	CarLot.loadInventory();//this is on the CarLot page and it reaches out to grab from the json
	// CarLot.activateEvents();//this function holds all the event listeners
}

populatePage();