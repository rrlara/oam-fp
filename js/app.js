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

  //$scope.imageHeight = $window.innerHeight;

  console.log("$window.innerHeight", $window.innerHeight);
  console.log("$window.innerWidth", $window.innerWidth);

  /* ----------- iPad mini ----------- */

  /* Portrait and Landscape */

    $scope.sectionHeight = function() {
      if ($window.innerWidth >= 768) {
        return {

          height: $window.innerHeight + 'px',
          'background-position': 50 + '%' + 50 + '%',
          'background-size': 'cover'
        };
      }else {
        return {
          width: 100 + '%'
        }
      }
    };

    $scope.sectionHeightHeader = function() {
      if ($window.innerWidth >= 768) {
        return {

          'line-height': $window.innerHeight + 60 + 'px'
        };
      }else{

      }
    }




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
