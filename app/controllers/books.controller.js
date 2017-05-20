app.controller('BooksController', ['books', 'loader', function (books, loader) {
  var vm = this;

  vm.books = books;
  vm.loader = loader;
}]);
