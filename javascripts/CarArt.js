"use strict";
// console.log("CarArt hooked up to index");



////////this iife is handling the building of the car cards/////////////
var CarLot = (function (oldCarLot) {
// console.log("test2");
	oldCarLot.carCard = function (usedCars){
        	// console.log("The car Card function is being called");      
              //the for loop runs for the length of the carArray and increases with every iteration
                for(var i = 0; i < usedCars.length; i++){
                  //the div is set to a variable and since it is grabbing by class name, and theres an array of these classes [i] must be included to change divs with every iteration
                var carDiv = document.getElementsByClassName('col-sm-4')[i];
                var carToSell = '';
                var carStuff = usedCars[i];
                
                  //building the cards
                  carToSell += '<div>';
                  //add the make and model of the car
             	  carToSell += '<h3>' + carStuff.make + ': ' + carStuff.model + '</h3>';
                  //add the year and price 
                  carToSell += '<h5>' + carStuff.year + '</h5>';
                  carToSell += '<p>' + carStuff.price + '</p>';
                  carToSell += '<p>' + carStuff.description + '</p>';
                  //close the card
	              carToSell += '</div>';

                  carDiv.innerHTML += carToSell; 
        }//closing the for loop

	};//closing the carCard function

	return oldCarLot;//returning to make it public

	


})(CarLot || {});