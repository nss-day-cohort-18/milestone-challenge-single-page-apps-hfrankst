"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      //storing the request to the json file in a newly declared variable
      var inventoryLoader = new XMLHttpRequest();
      //when the page loads, run this function to parse the info in the JSON file and make it able to be manipulated
      inventoryLoader.onload = function(){
      	//store the newly parsed JSON info into a variable. 
      	//responseText tells the program to look for the text within the JSON rather than the braces and brackets
      	var usedCars = JSON.parse(inventoryLoader.responseText);
      	console.log("Successful load", usedCars);
      }

      //upon the loading of the page, run this function....what do I want the function to do?
      inventoryLoader.addEventListener("load", function () {

      });
      //is this saying, "if there is an error loading the page, do this function"? If so, what do I want to do if there's an error
      inventoryLoader.addEventListener("error", function(){

      });
      //The following two lines reach out, open the JSON file, grab the info and then send it into the functions above
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  };

})(CarLot || {});