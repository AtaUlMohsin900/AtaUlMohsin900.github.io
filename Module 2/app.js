(function() {
    "use strict";
  
    angular.module("ShoppingListCheckOff", [])
      .controller("ToBuyShoppingController", ToBuyShoppingController)
      .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
      .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  
  
    ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
      var list = this;
  
      list.items = ShoppingListCheckOffService.getItemsToBuy();
  
      list.checkOff = function(itemIndex) {
        console.log("Checking off item ", itemIndex);
        ShoppingListCheckOffService.checkOff(itemIndex);
      };
    }
  
  
    AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
      var list = this;
  
      list.items = ShoppingListCheckOffService.getItemsBought();
    }
  
  
    // ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
      var service = this;
  
      var itemsToBuy = [ 
        { name: "Haggis", quantity: 1 }, 
        { name: "Neeps", quantity: 2 }, 
        { name: "Tatties", quantity: 3 }, 
        { name: "Drams", quantity: 4 }, 
        { name: "Tablet", quantity: 5 }, 
        { name: "Fudge", quantity: 6 }, 
        { name: "Jelly Babies", quantity: 7 }, 
        { name: "Salt & Vinegar Crisps", quantity: 8 }, 
        { name: "Ale", quantity: 9 }, 
        { name: "Plum Pudding", quantity: 10 } 
      ];
  
      var itemsBought = [];
  
      service.getItemsToBuy = function () {
        return itemsToBuy;
      };
  
      service.getItemsBought = function () {
        return itemsBought;
      };
  
      service.checkOff = function (itemIndex) {
        itemsBought.push(itemsToBuy[itemIndex]);
        itemsToBuy.splice(itemIndex, 1);
      };
    }
  })();