app.controller('BookTeaserController', ['config', '$location', function (config, $location) {
  var vm = this;
  vm.mediaUrl = config.mediaUrl;

  if (angular.isUndefined(vm.showFavouriteIcon)) {
    vm.showFavouriteIcon = true;
  }

  vm.getFullUrl = function (path) { // pobieramy pełen adres obrazka
    return vm.mediaUrl + path;
  };
}]);
