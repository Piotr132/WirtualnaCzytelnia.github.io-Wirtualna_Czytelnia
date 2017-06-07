app.controller('FavouriteController', ['favouritesService', function (favouritesService) {
  var vm = this;

  vm.getValueInStorage = function () {  // pobieramy klucz, pod którym w localStorage trzymana jest książka
    var title = vm.book.url.split('/');
    key = title[title.length - 2];

    return key;
  }

  vm.isBookFavourite = function () {  // sprawdzamy, czy książka została dodana jako ulubiona
    var valueInStorage = vm.getValueInStorage();
    return vm.favourites.indexOf(valueInStorage) !== -1;
  };

  vm.favouriteClicked = function() {  // ikonka ulubionych książek została kliknięta
    var valueInStorage = vm.getValueInStorage();

    if (vm.isBookFavourite()) {
      favouritesService.removeFavourite(valueInStorage); // jeśli książka jest ulubiona, to usuwamy z ulubionych
    } else {
      favouritesService.addFavourite(valueInStorage);  // jeśli książka nie jest ulubioona, to dodajemy do ulubionych
    }

    vm.favourites = favouritesService.getFavourites();
  };
}]);
