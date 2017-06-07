app.directive('favourite', function() {
  return {
     restrict: 'E',
     controller: 'FavouriteController',
     controllerAs: 'favourite',
     templateUrl: 'app/directives/favourite/favourite.html',
     scope: {
       favourites: '=',
       book: '='
     },
     bindToController: true
  };
});
