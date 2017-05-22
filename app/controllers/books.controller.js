app.controller('BooksController', ['books', 'loader', function (books, loader) {
  var vm = this;

  vm.originalBooks = angular.copy(books);
  vm.books = books;
  vm.currentPage = 0;
  vm.itemsPerPage = 54;
  vm.showPageNumber = 25;
  vm.currentItems = [];
  vm.loader = loader;

  vm.setItemsOnCurrentPage = function () {
    var startAt = Math.max((vm.currentPage - 1) * vm.itemsPerPage, 0);
    var endAt = Math.max(vm.currentPage, 1) * vm.itemsPerPage;
    vm.currentItems = vm.books.slice(startAt, endAt);
  };

  vm.pageChanged = function () { // została zmieniona strona z książkami
    vm.setItemsOnCurrentPage(); // ustawiamy tablicę z książkami na aktualnej stronie
  }

  vm.setItemsOnCurrentPage(); // ustawiamy tablicę z książkami na aktualnej stronie
}]);
