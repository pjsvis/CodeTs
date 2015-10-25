/// <reference path="../../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Controllers;
    (function (Controllers) {
        var Home;
        (function (Home) {
            angular.module('app').controller('HomeController', HomeController);
            function HomeController() {
                var vm = this;
                vm.state = { debug: false };
                vm.data = {};
            }
        })(Home = Controllers.Home || (Controllers.Home = {}));
    })(Controllers = App.Controllers || (App.Controllers = {}));
})(App || (App = {}));
//# sourceMappingURL=home.js.map