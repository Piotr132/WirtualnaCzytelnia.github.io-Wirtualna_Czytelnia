app.controller('BookController', ['bookInfo', function (bookInfo) {
  var vm = this;
  vm.book = bookInfo; // przypisujemy do kontrolera wynik naszego resolve (app.js)
}]);
