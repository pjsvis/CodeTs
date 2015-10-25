/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var GiltController;
        (function (GiltController) {
            var Gilt = App.Services.GiltApi;
            //TODO: Get the route params so that we can restore the state
            angular.module('app')
                .controller('GiltController', function ($scope, $window, GiltApi) {
                var vm = this;
                vm.data = {};
                var state = { status: Gilt.Status.active, subject: null, debug: false };
                vm.state = state;
                var getData = function () { return GiltApi.sales(state.status, state.subject).then(function (response) { return vm.data.sales = response.data; }); };
                vm.toggleDebug = function () { return state.debug = !state.debug; };
                vm.active = function () { state.status = Gilt.Status.active; getData(); };
                vm.active = function () { state.status = Gilt.Status.active; getData(); };
                vm.upcoming = function () { state.status = Gilt.Status.upcoming; getData(); };
                vm.men = function () { state.subject = Gilt.Subject.men; getData(); };
                vm.women = function () { state.subject = Gilt.Subject.women; getData(); };
                vm.kids = function () { state.subject = Gilt.Subject.kids; getData(); };
                vm.home = function () { state.subject = Gilt.Subject.home; getData(); };
                vm.all = function () { state.subject = null; getData(); };
                getData();
                console.log('Gilt loaded');
            });
        })(GiltController = Controllers.GiltController || (Controllers.GiltController = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=gilt.js.map