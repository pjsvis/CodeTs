/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var GiltController;
        (function (GiltController_1) {
            var Gilt = App.Services.GiltApi;
            //TODO: Get the route params 
            angular.module('app').controller('GiltController', GiltController);
            function GiltController($scope, $log, $window, GiltApi) {
                var vm = this;
                vm.data = {};
                var state = { status: Gilt.Status.active, subject: null, debug: false };
                vm.state = state;
                var getData = function () { return GiltApi.sales(state.status, state.subject).then(function (response) { return vm.data.sales = response.data; }); };
                $scope.$watch('vm.state', function (current, original) {
                    $log.info("status: " + original.status + " => " + current.status + " subject: " + original.subject + " => " + current.subject);
                    getData();
                }, true);
                vm.toggleDebug = function () { return state.debug = !state.debug; };
                vm.active = function () { state.status = Gilt.Status.active; };
                vm.active = function () { state.status = Gilt.Status.active; };
                vm.upcoming = function () { state.status = Gilt.Status.upcoming; };
                vm.men = function () { state.subject = Gilt.Subject.men; };
                vm.women = function () { state.subject = Gilt.Subject.women; };
                vm.kids = function () { state.subject = Gilt.Subject.kids; };
                vm.home = function () { state.subject = Gilt.Subject.home; };
                vm.all = function () { state.subject = null; };
                getData();
                console.log('Gilt loaded');
            }
        })(GiltController = Controllers.GiltController || (Controllers.GiltController = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=gilt.js.map