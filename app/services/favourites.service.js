app.service('favouritesService', ['$window', '$q', 'api', 'loader', function ($window, $q, api, loader) {
  var vm = this;
  vm.favourites = {};

  vm.getFavourites = function() {
    return JSON.parse($window.localStorage.libraryFavourites || '[]');  // pobieramy z localStorage informacje o ulubionych książkach
  };

  vm.saveFavourites = function (favourites) {
    $window.localStorage.libraryFavourites = JSON.stringify(favourites);
  };

  vm.addFavourite = function(favouriteBook) {
    var favouriteBooks = vm.getFavourites();
    favouriteBooks.push(favouriteBook);
    vm.saveFavourites(favouriteBooks);  // zapisujemy w localStorage informacje o ulubionych książkach
  };

  vm.removeFavourite = function(bookToRemove) {
    var favouriteBooks = vm.getFavourites();
    var index = favouriteBooks.indexOf(bookToRemove);

    if (index > -1) {
        favouriteBooks.splice(index, 1);  // usuwamy z tablicy ulubionych książek
    }

    vm.saveFavourites(favouriteBooks);  // zapisujemy w localStorage informacje o ulubionych książkach
  };
}]);
