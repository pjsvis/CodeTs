/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var Nav;
        (function (Nav) {
            var NavRoute = (function () {
                function NavRoute() {
                }
                Object.defineProperty(NavRoute, "home", {
                    get: function () { return 'home'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(NavRoute, "gilt", {
                    get: function () { return 'gilt'; },
                    enumerable: true,
                    configurable: true
                });
                return NavRoute;
            })();
            // TODO: Get the route params so that we can set the state 
            angular.module('app').controller('NavController', NavController);
            function NavController() {
                var vm = this;
                vm.state = { debug: false, route: NavRoute.home };
                vm.toggleDebug = function () { return vm.state.debug = !vm.state.debug; };
                vm.home = function () { return vm.state.route = NavRoute.home; };
                vm.gilt = function () { return vm.state.route = NavRoute.gilt; };
            }
        })(Nav = Controllers.Nav || (Controllers.Nav = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=nav.js.map