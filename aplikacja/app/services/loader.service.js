app.service('loader', function () {
  var vm = this;
  vm.loaderVisible = false;
  vm.changeLocked = false;

  vm.enableLoader = function() {
    if (!vm.changeLocked) {
      vm.loaderVisible = true;  // pokazujemy loader
    }
  };

  vm.disableLoader = function() {
    if (!vm.changeLocked) {
      vm.loaderVisible = false;  // ukrywamy loader
    }
  };

  vm.lockChangingState = function() {
    vm.changeLocked = true; // blokujemy zmianę stanu loadera
  };

  vm.unlockChangingState = function() {
    vm.changeLocked = false; // odblokowujemy zmianę stanu loadera
  };
});
