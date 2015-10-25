/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Services;
    (function (Services) {
        var GiltApi;
        (function (GiltApi_1) {
            var Status = (function () {
                function Status() {
                }
                Object.defineProperty(Status, "active", {
                    get: function () { return 'active'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Status, "upcoming", {
                    get: function () { return 'upcoming'; },
                    enumerable: true,
                    configurable: true
                });
                return Status;
            })();
            GiltApi_1.Status = Status;
            var Subject = (function () {
                function Subject() {
                }
                Object.defineProperty(Subject, "men", {
                    get: function () { return 'men'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Subject, "women", {
                    get: function () { return 'women'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Subject, "kids", {
                    get: function () { return 'kids'; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Subject, "home", {
                    get: function () { return 'home'; },
                    enumerable: true,
                    configurable: true
                });
                return Subject;
            })();
            GiltApi_1.Subject = Subject;
            angular.module('app').factory('GiltApi', GiltApi);
            function GiltApi($http) {
                var fac = {};
                var baseUrl = 'https://api.gilt.com';
                var application = 'application=AngularGilt';
                //example resource: '/v1/sales/men/active.json'
                var apiKey = 'apikey=2440447922c57c973d514596633f7c2f0bdef21c5d831613bc88cfbba88e79e9';
                var jsonCallBack = 'callback=JSON_CALLBACK';
                var buildUrl = function (resource) {
                    var url = [baseUrl, resource, '?', apiKey, '&', jsonCallBack].join('');
                    return url;
                };
                var resource = function (status, subject) {
                    if (subject === void 0) { subject = null; }
                    return subject == null
                        ? ['/v1/sales/', status, '.json'].join('')
                        : ['/v1/sales/', subject, '/', status, '.json'].join('');
                };
                fac.sales = function (status, subject) {
                    var res = resource(status, subject);
                    var url = buildUrl(res);
                    console.log(url, 'GiltApi');
                    return $http.jsonp(url);
                };
                return fac;
            }
        })(GiltApi = Services.GiltApi || (Services.GiltApi = {}));
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=giltApi.js.map