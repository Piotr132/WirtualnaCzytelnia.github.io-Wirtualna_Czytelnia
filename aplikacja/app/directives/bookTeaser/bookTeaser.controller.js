app.controller('BookTeaserController', ['config', '$location', function (config, $location) {
  var vm = this;
  vm.mediaUrl = config.mediaUrl;

  if (angular.isUndefined(vm.showFavouriteIcon)) {
    vm.showFavouriteIcon = true;
  }

  vm.getFullUrl = function (path) { // pobieramy pełen adres obrazka
    return vm.mediaUrl + path;
  };

  vm.getBookName = function (href) {  // pobieramy samą nazwę książki
    return href.replace('http://wolnelektury.pl/api/books/', '');
  };

  vm.goToBookInfo = function (href) { // przekierowujemy na stronę z informacjami o wybranej książce
    var name = vm.getBookName(href);
    var path = '/books/'+name;
    $location.path(path);
  }
}]);
