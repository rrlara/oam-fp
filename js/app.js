var app = angular.module('finder', [], function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
})

app.controller('ctrl', function($scope, $filter, $http, $location, $window) {
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




  $scope.sendAnalytics = function() {
    $window.ga('send', 'pageview', { page: '/#'+$location.url() });
  };

  $scope.updateLocation = function() {
    $location.path("/"+$scope.selectedTags.replace(' ','+'));
    $scope.sendAnalytics();
  };

  $scope.reset = function() {
    $location.path("");
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
