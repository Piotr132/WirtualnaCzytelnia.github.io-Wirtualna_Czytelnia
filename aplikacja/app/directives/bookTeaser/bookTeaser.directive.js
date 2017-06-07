app.directive('bookTeaser', function() {
  return {
     restrict: 'E',
     controller: 'BookTeaserController',
     controllerAs: 'bookTeaser',
     templateUrl: 'app/directives/bookTeaser/bookTeaser.html',
     scope: {
       book: '=',
       favourites: '=',
       showFavouriteIcon: '='
     },
     bindToController: true
  };
});
