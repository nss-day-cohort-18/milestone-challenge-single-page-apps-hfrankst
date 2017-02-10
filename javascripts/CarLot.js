"use strict";

//////////////////////this iife is loading the info from the json file
// console.log("CarLot hooked up to index");

var CarLot = (function (oldCarLot) {
  //this array is inside the overall function so that it can be pushed into from below?? this may not be right though
  var inventory = [];

  // console.log("test1");
    //this loadInventory function will be able to be invoked with CarLot.loadInventory();
    oldCarLot.loadInventory = function () {
      //storing the request to the json file in a newly declared variable
      var inventoryLoader = new XMLHttpRequest();

      //when the page loads, run this function to parse the info in the JSON file and make it able to be manipulated

      inventoryLoader.addEventListener("load", function () {
        	//responseText tells the program to look for the text within the JSON rather than the braces and brackets
        var usedCars = JSON.parse(event.target.responseText);
          // console.log("straight outta the JSON", usedCars);
          //the data comes back as an array so the index number must be explicitly stated to work with 
        var carArray = Object.values(usedCars)[0];
          // console.log("What is in carArray", carArray);
          //this is logging the ability to properly grab a value
          // console.log("getting values out of carArray", carArray[0].make);
          //here I am pushing the values of the carArray into the inventory array, and it is working
        inventory.push(carArray);
          // console.log("the inventory array", inventory);//successful push
          // console.log("the carArray", carArray);
        carCard(carArray);/////////currently grunt thinks this is undefined. Why doesn't this get passed into the carCard function built on the CarArt.js
        console.log("the result of passing the inventory into the carCard function", carArray);
      });
  
  //The following two lines reach out, open the JSON file, grab the info and then send it into the functions above
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();




      console.log("Current inventory is ", inventory);//this doesn't reflect the pushing done in the above code and I'm not sure why
      //is this saying, "if there is an error loading the page, do this function"? If so, what do I want to do if there's an error
      inventoryLoader.addEventListener("error", function(){
        alert("Oops, somehow we lost all of your cars!!!");//this alert is undefined..not sure why
      });
  
  };//closing loadInventory function

    return oldCarLot;//returning the value of this function to make it accessible to the rest of the files
    

})(CarLot || {});