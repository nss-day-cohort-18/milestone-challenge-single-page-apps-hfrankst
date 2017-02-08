"use strict";
function populatePage (inventory) {
  // Loop over the inventory and populate the page


    //building the car cards
      function carCard(usedCars){
          var carDiv = document.getElementsByClassName('col-sm-4 col-md-6')[0];
          console.log("testing the waters", carDiv);
          var oneCar;
          for(oneCar in usedCars){
            var carToSell = '';
            var carStuff = usedCars[oneCar];
            carToSell += '<div>';
            //add the make and model of the car
            carToSell += '<h3>' + usedCars.make + ': ' + usedCars.model + '</h3>';
            //add the year and price 
            carToSell += '<h5>' + usedCars.year + '</h5>';
            carToSell += '<p>' + usedCars.price + '</p>';
            carToSell += '<p>' + usedCars.description + '</p>';
            //close the card
            carToSell += '</div>';

            carDiv.innerHTML += carToSell; 
            carDiv++;
          }


      };

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();