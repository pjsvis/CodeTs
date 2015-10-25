/// <reference path="../typings/tsd.d.ts" />
angular.module('app').config(function ($routeProvider) {
    $routeProvider.when('/gilt', {
        templateUrl: 'app/partials/gilt/gilt.tpl.html',
        controllerAs: 'GiltController'
    })
        .otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=routes.js.map