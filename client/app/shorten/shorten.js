angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {
    url: ''
  };

  $scope.addLink = function() {
    $scope.link.url = $scope.url;
    Links.addOne($scope.link);
    $scope.url = '';
  };
});
