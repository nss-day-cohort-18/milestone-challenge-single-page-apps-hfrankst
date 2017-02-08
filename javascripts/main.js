"use strict";

function populatePage (inventory) {
//   Loop over the inventory and populate the page
// need an event listener on the input field that will trigger a function to copy text input into the description section
// need an event listener on the cards themselves to change up the styling, creating a bigger border

// listening for the card being selected
document.getElementsByClassName("col-sm-4").addEventListener('click', function(){
	this.classList.toggle('clicked');
	// console.log("click seen");
});

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();