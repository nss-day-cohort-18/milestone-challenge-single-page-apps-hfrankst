"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      //storing the request to the json file in a newly declared variable
      var inventoryLoader = new XMLHttpRequest();

      //when the page loads, run this function to parse the info in the JSON file and make it able to be manipulated

      inventoryLoader.addEventListener("load", function putCarsInCards() {
        //this may be the place to call a function from the CarArt file
        	//responseText tells the program to look for the text within the JSON rather than the braces and brackets
        var usedCars = JSON.parse(event.target.responseText);
        console.log("usedCars", usedCars);
        var carArray = Object.values(usedCars)[0];
        console.log("What is in carArray", carArray);
        console.log("getting values", carArray[0].make);
        inventory.push(carArray);
        console.log("updated inventory? ", inventory);
        carCard(carArray);
      });
       function carCard(carArray){
                var i = 0;
                var carDiv = document.getElementsByClassName('col-sm-4 col-md-6')[i];
                console.log("testing the waters", carDiv);
                var car;
                for(car in carArray){
                  var carToSell = '';
                  var carStuff = carArray[car];
                  carToSell += '<div>';
                  //add the make and model of the car
                  carToSell += '<h3>' + carArray[i].make + ': ' + carArray[i].model + '</h3>';
                  //add the year and price 
                  carToSell += '<h5>' + carArray[i].year + '</h5>';
                  carToSell += '<p>' + carArray[i].price + '</p>';
                  carToSell += '<p>' + carArray[i].description + '</p>';
                  //close the card
                  carToSell += '</div>';

                  carDiv.innerHTML += carToSell; 
                  i++;
                  console.log('looping');
                }


            };

      //is this saying, "if there is an error loading the page, do this function"? If so, what do I want to do if there's an error
      inventoryLoader.addEventListener("error", function(){
        alert("Oops, somehow we lost all of your cars!!!");
      });

      //The following two lines reach out, open the JSON file, grab the info and then send it into the functions above
      inventoryLoader.open("GET", "inventory.json");
      console.log("Current inventory is ", inventory);
      inventoryLoader.send();
    }
  };

})(CarLot || {});