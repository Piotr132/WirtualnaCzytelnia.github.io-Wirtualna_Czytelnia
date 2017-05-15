var app = angular.module('library', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider    // tworzymy nasze routy - strony, przypisując im odpowiedni plik html oraz kontroller, a także resolve, czy akcje, które mają się uruchomić przed wejściem w ten route
    .when('/', {
        templateUrl : './app/templates/main.html',  // plik html
        controller: angular.noop  // brak kontrolera dla tej strony
    })
    .otherwise({
        redirectTo: '/' // jeśli nie weszliśmy na żaden z zadeklarowanych linków, wracamy na stronę główną
    });
}]);
