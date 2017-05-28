app.controller('BookInfoController', ['favouritesService', function (favouritesService) {
  var vm = this;
  vm.favourites = favouritesService.getFavourites();
}]);
