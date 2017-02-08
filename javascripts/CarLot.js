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
        var usedCars = JSON.parse(inventoryLoader.responseText);
        console.log("usedCars", usedCars);
        console.log("the make of the cars;", usedCars.make);
        carCard(usedCars);
      });


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