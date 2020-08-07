// data-ng-app given in the body tag mapped module 
var helloApp = angular.module('hello_world_app',[]);

// HelloController
helloApp.controller('HelloController', ['$scope', function($scope) {
  $scope.helloMsg = 'welcome to Javadomain.in! Happy AngularJS Learning!!';
}]);


helloApp.controller('AuthorController', ['$scope', function($scope) {
  $scope.author = 'Naveen kumar Gunasekaran';
}]);
