"use strict";

//////////////////////this iife is loading the info from the json file
// console.log("CarLot hooked up to index");

var CarLot = (function (oldCarLot) {
  //this array is inside the overall function so that it can be pushed into from below?? this may not be right though
  var inventory;

    //this loadInventory function will be able to be invoked with CarLot.loadInventory();
    oldCarLot.loadInventory = function () {
      var inventoryLoader = new XMLHttpRequest();//this is the request to reach out to the json file
        inventoryLoader.open("GET", "inventory.json");//this 'get' function actually grabs the info from the json
        inventoryLoader.send();//I think that this function 'sends' the data out to make it usable to the other functions?

      inventoryLoader.addEventListener("load", function () {
        var usedCars = JSON.parse(event.target.responseText);//in this event listener, the info from the json is parsed into usable data once the loading is complete
          console.log("straight outta the JSON", usedCars);//looking at what was just loaded up
        CarLot.carCard(usedCars);//this is sending the object full of car data to the carCard function on the CarArt.js to build the car cards on the DOM
      });

      inventoryLoader.addEventListener("error", function(){
        alert("Don't worry, we didn't lose your cars! Try reloading the page.");//this ensures that if the json doesn't load correctly, the user will know that something went wrong
      });     
  
    };//close of loadInventory function

      console.log("inventory", inventory);
      /////////////////////////////I DONT KNOW WHAT THIS IS SUPPOSED TO DO////////////////////////////////////
    oldCarLot.returnInventory = () => inventory;//thanks to taylor, this grabs the objects out of the json array and stores them here.

    return oldCarLot;//returning the value of this function to make it accessible to the rest of the files
    

})(CarLot || {});