/// <reference path="../../typings/tsd.d.ts" />
angular.module('app').factory(function ($http) {
    var fac = {};
    var showErrors = function (response) {
    };
    fac.get = function (url) {
        $http.get(url).then(function (response) {
            return response;
        }), function (response) {
            // TODO: Handle errors
        };
    };
    return fac;
});
//# sourceMappingURL=HttpHelper.js.map