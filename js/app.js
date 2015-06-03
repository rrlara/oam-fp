var app = angular.module('oam', [], function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
})

app.controller('fontPageCtrl', function($scope, $filter, $http, $location, $window) {
  $scope.currentPage = 1;
  $scope.pageSize = 20;
  $scope.data = [];

  $scope.$watch(function () { return $location.url(); }, function () {

    var path = $location.path().split('/'),
    locationSearch = path[1],
    locationPage = path[2];

    $scope.selectedCategory = $location.search().category;
    $scope.selectedSubsets = $location.search().subset;
    $scope.selectedVariants = $location.search().variant;

  });

  $scope.imageHeight = $window.innerHeight;

  $scope.myprop = function() {
    return {

      height: $scope.imageHeight + 'px'
    };
  };

});

app.filter('startFrom', function() {
  return function(input, start) {
    start = +start;
    return input.slice(start);
  };
});


app.filter('ceil', function() {
  return function(input) {
    return Math.ceil(input);
  };
});
