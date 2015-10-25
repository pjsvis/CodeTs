/// <reference path="../../../typings/tsd.d.ts" />

module App.Controllers.GiltController {

	import Gilt = App.Services.GiltApi

	interface IGiltState {
		status: Gilt.Status;
		subject: Gilt.Subject;
		debug: boolean;
	}

	interface IGiltViewModel {
		data: any;
		state: IGiltState
		toggleDebug: () => void;
		active: () => void;
		upcoming: () => void;
		men: () => void;
		women: () => void;
		kids: () => void;
		home: () => void;
		all: () => void;
	}
	
	//TODO: Get the route params 
	angular.module('app').controller('GiltController', GiltController)

	function GiltController($scope, $log, $window, GiltApi: Gilt.IGiltApi) {
		var vm: IGiltViewModel = this;
		vm.data = {};
		var state: IGiltState = { status: Gilt.Status.active, subject: null, debug: false };
		vm.state = state;

		var getData = () => GiltApi.sales(state.status, state.subject).then(
			response => vm.data.sales = response.data
		);

		$scope.$watch('vm.state', function(current, original) {
			$log.info(`status: ${original.status} => ${current.status} subject: ${original.subject} => ${current.subject}`);
			getData();
		}, true);

		vm.toggleDebug = () => state.debug = !state.debug;
		vm.active = () => { state.status = Gilt.Status.active; }
		vm.active = () => { state.status = Gilt.Status.active; }
		vm.upcoming = () => { state.status = Gilt.Status.upcoming; }
		vm.men = () => { state.subject = Gilt.Subject.men; }
		vm.women = () => { state.subject = Gilt.Subject.women; }
		vm.kids = () => { state.subject = Gilt.Subject.kids; }
		vm.home = () => { state.subject = Gilt.Subject.home; }
		vm.all = () => { state.subject = null; }
		getData();
		console.log('Gilt loaded');
	}
}