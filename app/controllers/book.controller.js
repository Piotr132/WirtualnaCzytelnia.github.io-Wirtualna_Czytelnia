app.controller('BookController', ['ngAudio', 'bookInfo', function (ngAudio, bookInfo) {
  var vm = this;
  vm.book = bookInfo; // przypisujemy do kontrolera wynik naszego resolve (app.j
  vm.audioFile = vm.book.media.filter(function(el) {
    return el.type === 'ogg' || el.type === 'mp3';
  })[0];  // znajdujemy plik ogg i mp3

  if (angular.isDefined(vm.audioFile)) {  // jeśli audioFile nie jest puste
    vm.audioFile = ngAudio.load(vm.audioFile.url);  // wczytujemy plik do pluginu
  }

  vm.playMusic = function () {
    vm.audioFile.play();  // zaczynamy odtwarzać dźwięk
  };

  vm.stopMusic = function () {
    vm.audioFile.pause();  // zatrzymujemy odtwarzanie dźwięku
  };
}]);
