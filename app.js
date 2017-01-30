(function(){

'use strict';

var app = angular.module('myApp',[]);

app.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
{

  $scope.dishes='';
  $scope.errorMessage = '';
  $scope.textClass = '';
  $scope.borderClass = '';
  $scope.checkForTooMuch=function(){
    if($scope.dishes == '')
    {
      $scope.errorMessage = 'Please enter data first';
      $scope.textClass = 'red';
      $scope.borderClass = 'borderRed';
      return;
    }
    var items = $scope.dishes.split(',');
    items = items.filter(checkForEmpty);
    $scope.textClass = 'green';
    $scope.borderClass = 'borderGreen';
    if(items.length > 3)
    {
      $scope.errorMessage = 'Too Much!';
    }
    else {
      $scope.errorMessage = 'Enjoy!';
    }
  }
  function checkForEmpty(element)
  {
    return element != '';
  }

}






})();
