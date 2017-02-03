"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', inventory.json);
      inventoryLoader.onload = function(){
      	var usedCars = JSON.parse(inventoryLoader.responseText);
      	console.log("Successful load", usedCars);
      }

      
      inventoryLoader.addEventListener("load", function () {

      });

      inventoryLoader.addEventListener("error", function(){

      });
    }
  };

})(CarLot || {});