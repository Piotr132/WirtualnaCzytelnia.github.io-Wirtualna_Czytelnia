app.directive('header', function() {
  return {
     restrict: 'E',
     controller: 'HeaderController',
     controllerAs: 'header',
     templateUrl: 'app/directives/header/header.html'
  };
});
