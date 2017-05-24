app.service('api', ['config', '$http', 'loader', function (config, $http, loader) {
  var vm = this;
  vm.apiUrl = config.apiUrl;
  vm.loader = loader;

  vm.getBooks = function () {
    vm.loader.enableLoader(); // pokazujemy loader
    return $http.get(vm.apiUrl + 'books/').then( // wykonujemy zapytanie do api
      function (response) {
        vm.loader.disableLoader(); // ukrywamy loader
        return response.data; // zwracamy treść, którą zwróciło api
      }
    );
  };
}]);
