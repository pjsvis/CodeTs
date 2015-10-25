/// <reference path="../../../typings/tsd.d.ts" />
module App.Nav{
	class NavRoute {
		public static get home(): string { return 'home' }
		public static get gilt(): string { return 'gilt' }
	}
	interface INavState {
		route: NavRoute;
		debug: boolean;
	}
	interface INavViewModel {
		state: INavState;
		toggleDebug(): void;
		home(): void;
		gilt(): void;
	}

	// TODO: Get the route params so that we can set the state 
	angular.module('app').controller('NavController', function() {

		var vm: INavViewModel = this;
		vm.state = { debug: false, route: NavRoute.home };
		vm.toggleDebug = () => vm.state.debug = !vm.state.debug;
		vm.home = () => vm.state.route = NavRoute.home;
		vm.gilt = () => vm.state.route = NavRoute.gilt;
	})
}