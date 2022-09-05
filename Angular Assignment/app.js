(function() {
    "use strict";
  
    angular.module("LunchCheck", []).controller("LunchCheckController", LunchCheckController);
  
    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController($scope) {
      $scope.itemString = "";
      $scope.nbOfItems = 0;
      $scope.resultString;
      // $scope.resultClass;
      $scope.resultOk = null;
  
      $scope.checkItems = function() {
        //If anything entered in textbox
        if($scope.itemString.length > 0) {
          console.log("Items entered: " + $scope.itemString);
          var itemArray = $scope.itemString.split(",");
          console.log("Items as array: " + itemArray);
  
          $scope.resultString = checkItemCount(itemArray);
          // var result = checkItemCount(itemArray);
          // $scope.resultString = result.string;
          // $scope.resultClass = result.class;
          $scope.resultOk = true;
        }
        else
        {
          $scope.resultString = "Please enter data first";
          // $scope.resultClass = "notOk";
          $scope.resultOk = false;
        }
      };
    }
  
    function checkItemCount(items) {
      var itemCount = items.length;
      console.log("Number of items entered: " + itemCount);
  
      if(itemCount < 4)
        // return { string: "Enjoy!", class: "ok" };
        return "Enjoy!";
      else
        // return { string: "Too much!", class: "notOk" };
        return "Too much!";
    }
  })();