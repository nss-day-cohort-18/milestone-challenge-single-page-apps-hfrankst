"use strict";


function populatePage (inventory) {
//   Loop over the inventory and populate the page
// need an event listener on the input field that will trigger a function to copy text input into the description section
// need an event listener on the cards themselves to change up the styling, creating a bigger border




  // Now that the DOM is loaded, establish all the event listeners needed
  //this is being seen as undefined
	CarLot.activateEvents();
	CarLot.loadInventory();//grunt is saying this is undefined at the moment and I don't know why, but I don't care because it is still printed the data onto the html
	console.log("inventory function invoked");
}
populatePage();
// Load the inventory and send a callback function to be
// invoked after the process is complete

