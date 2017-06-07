app.controller('FavouritesController', ['favouriteBooks', 'favouritesService', 'config', function (favouriteBooks, favouritesService, config) {
  var vm = this;
  vm.books = favouriteBooks;

  for (var i = 0; i < vm.books.length; i++) {
    var urlParts = vm.books[i].url.split('/');
    var href = urlParts[urlParts.length - 2];
    vm.books[i].cover_thumb = vm.books[i].cover_thumb.replace(config.mediaUrl, '');
    vm.books[i].href = href;
  }

  vm.favouriteBooks = favouritesService.getFavourites();
}]);
