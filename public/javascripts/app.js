// hi friends.. it has been a while eh? :)
var app = angular.module('App', []);
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

app.controller('DispensaryCtrl', function($scope, $http) {

  $scope.locations;
  $scope.getLocations = function() {
    $http.get('http://illinoisdispensaries.space/api-v1').success(function(data) {
      console.log(data);
      $scope.locations = data;
    });
  };
  $scope.getLocations();
  console.log($scope.locations);
});
