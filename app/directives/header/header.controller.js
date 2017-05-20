app.controller('HeaderController', ['$route', '$location', function ($route, $location) {
  var vm = this;

  vm.linkShouldBeActive = function (path) { // sprawdzamy, czy link powinien być aktywny
    if (angular.isUndefined($route.current.$$route)) {
      return false;
    }

    return $route.current.$$route.originalPath === path;
  };

  vm.goToUrl = function (path) {  // przekierowyjemy na adres z parametru
    $location.path(path);
  }
}]);
