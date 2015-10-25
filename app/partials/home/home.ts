/// <reference path="../../../typings/tsd.d.ts" />
module App.Controllers.Home {
	interface IHomeState {
		debug: boolean;
	}

	interface IHomeViewModel {
		data: any;
		state: IHomeState
	}
	angular.module('app').controller('', function() {
		var vm: IHomeViewModel = this
		vm.state = { debug: false }
		vm.data={}

	})
}
