(function(){
'use strict'

  angular.module('ModuleOneApp', [])

  .controller('LunchCheckController', CheckLunchController);

  CheckLunchController.$inject = ['$scope'];
  function CheckLunchController($scope){
    $scope.dishesList = '';
    $scope.message = '';

    $scope.CheckIfTooMuch = function(){
      if($scope.dishesList.trim().length === 0){
        $scope.message = "Please enter data first";
        return;
      }
      var items = RemoveEmptyItems($scope.dishesList.split(','));
      if(items.length <= 3){
        $scope.message = 'Enjoy!';
      }else{
          $scope.message = 'Too much!';
      }
    };
  }

  function RemoveEmptyItems(items){
    var result = [];
    for(var i=0;i<items.length;i++){
      if(items[i] && items[i].trim().length > 0){
        result.push(items[i]);
      }
    }
    return result;
  }

})();
