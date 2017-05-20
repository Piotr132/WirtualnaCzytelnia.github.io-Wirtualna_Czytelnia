app.directive('loader', function() {
  return {
     restrict: 'E',
     controller: 'LoaderController',
     controllerAs: 'loader',
     templateUrl: 'app/directives/loader/loader.html'
  };
});
