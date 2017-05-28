app.controller('BooksController', ['books', 'loader', 'favouriteBooks', function (books, loader, favouriteBooks) {
  var vm = this;

  vm.originalBooks = angular.copy(books);
  vm.books = books;
  vm.currentPage = 0;
  vm.itemsPerPage = 54;
  vm.showPageNumber = 25;
  vm.currentItems = [];
  vm.searchPhrase = '';
  vm.loader = loader;
  vm.favouriteBooks = favouriteBooks;

  vm.setItemsOnCurrentPage = function () {
    var startAt = Math.max((vm.currentPage - 1) * vm.itemsPerPage, 0);
    var endAt = Math.max(vm.currentPage, 1) * vm.itemsPerPage;
    vm.currentItems = vm.books.slice(startAt, endAt);
  };

  vm.pageChanged = function () { // została zmieniona strona z książkami
    vm.setItemsOnCurrentPage(); // ustawiamy tablicę z książkami na aktualnej stronie
  }

  vm.searchPhraseChanged = function () {  // zmienił się tekst w wyszukiwarce
    vm.books = angular.copy(vm.originalBooks);  // kopiujemy tablicę z książkami, która została zwrócona z api, aby nie trzymać referencji, a utworzyć nową tablicę
    loader.enableLoader();  // pokazujemy loader

    if (vm.searchPhrase.length >= 3) {  // tylko jeśli długość wpisanego słowa jest większa lub równa 3
      var tmp = vm.books.filter(function (el) { // odrzucamy książki, których ani tytuł ani autor nie pasują do wpisanego słowa, wielkość liter nie ma znaczenia
        return el.author.toLowerCase().indexOf(vm.searchPhrase.toLowerCase()) !== -1
        || el.title.toLowerCase().indexOf(vm.searchPhrase.toLowerCase()) !== -1;
      });

      vm.books = tmp;
    }

    vm.setItemsOnCurrentPage(); // ustawiamy tablicę z książkami na aktualnej stronie
    loader.disableLoader();  // ukrywamy loader
  }

  vm.setItemsOnCurrentPage(); // ustawiamy tablicę z książkami na aktualnej stronie
}]);
