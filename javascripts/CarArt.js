"use strict";
// console.log("CarArt hooked up to index");



////////this iife is handling the building of the car cards/////////////
var CarLot = (function (oldCarLot) {
// console.log("test2");
	oldCarLot.carCard = function (usedCars){
          // var usedCars;     
              //the for loop runs for the length of the carArray and increases with every iteration
                for(var i = 0; i < usedCars.length; i++){
                	// console.log("usedCars ", usedCars.length); 
                  //the div is set to a variable and since it is grabbing by class name, and theres an array of these classes [i] must be included to change divs with every iteration
                var carDiv = document.getElementsByClassName('col-sm-4')[i];
                // var carStuff = usedCars[i];
                
                var carToSell = `<div class="${i}">
                                  <h3>` + usedCars[i].make + `:` + usedCars[i].model + `</h3>
                                  <h5>` + usedCars[i].year + `</h5>
                                  <p>` + usedCars[i].price + `</p>
                                  <p class="mirror">` + usedCars[i].description + `</p>
                                 </div>`;

                  carDiv.innerHTML += carToSell;

        }//closing the for loop

	};//closing the carCard function

	return oldCarLot;//returning to make it public

	


})(CarLot || {});