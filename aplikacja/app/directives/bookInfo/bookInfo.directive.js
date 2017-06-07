app.directive('bookInfo', function() {
  return {
     restrict: 'E',
     controller: 'BookInfoController',
     controllerAs: 'bookInfo',
     templateUrl: 'app/directives/bookInfo/bookInfo.html',
     scope: {
       info: '='
     },
     bindToController: true
  };
});
