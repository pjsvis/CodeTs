/// <reference path="../../typings/tsd.d.ts" />
module App.Services.GiltApi {
	export class Status {
		public static get active(): string { return 'active' }
		public static get upcoming(): string { return 'upcoming' }
	}
	export class Subject {
		public static get men(): string { return 'men' }
		public static get women(): string { return 'women' }
		public static get kids(): string { return 'kids' }
		public static get home(): string { return 'home' }
	}
	export interface IGiltApi {
		sales: (status: Status, subject?: Subject) => ng.IHttpPromise<any>;
	}

	angular.module('app').factory('GiltApi', function($http: ng.IHttpService) {
		var fac: any = {};
		const baseUrl = 'https://api.gilt.com';
		const application = 'application=AngularGilt';
		//example resource: '/v1/sales/men/active.json'
		const apiKey = 'apikey=2440447922c57c973d514596633f7c2f0bdef21c5d831613bc88cfbba88e79e9';
		const jsonCallBack = 'callback=JSON_CALLBACK';

		var buildUrl = function(resource: string): string {
			var url = [baseUrl, resource, '?', apiKey, '&', jsonCallBack].join('');
			return url;
		}

		var resource = function(status: Status, subject: Subject = null): string {
			return subject == null
				? ['/v1/sales/', status, '.json'].join('')
				: ['/v1/sales/', subject, '/', status, '.json'].join('');
		}

		fac.sales = function(status: Status, subject?: Subject) {
			var res = resource(status, subject);
			var url = buildUrl(res);
			console.log(url, 'GiltApi');
			return $http.jsonp(url);
		}
		return fac;
	})
}
