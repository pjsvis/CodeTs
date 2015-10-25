/// <reference path="../../typings/tsd.d.ts" />
interface IHttpHelper{
	get: (url: string) => ng.IHttpPromise<any>;
	post: (url: string, data:any) => ng.IHttpPromise<any>;
	put: (url: string, data:any) => ng.IHttpPromise<any>;
	delete: (url: string, data:any) => ng.IHttpPromise<any>;
	jsonp: (url: string) => ng.IHttpPromise<any>;
}

angular.module('app').factory(function($http){
	var fac: any={};
	
	var showErrors = function(response: ng.IPromise<any>){
			}
	
	fac.get=function(url: string){$http.get(url).then(function(response){
		return response;
	}), function(response){
		// TODO: Handle errors
	}}
	return fac;
})