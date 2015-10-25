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
	
	//TODO: Get the route params so that we can restore the state
	angular.module('app')
		.controller('GiltController', function($scope, $window, GiltApi: Gilt.IGiltApi) {
			var vm: IGiltViewModel = this;
			vm.data = {};
			var state: IGiltState = { status: Gilt.Status.active, subject: null, debug: false };
			vm.state = state;

			var getData = () => GiltApi.sales(state.status, state.subject).then(
				response => vm.data.sales = response.data
			);

			vm.toggleDebug = () => state.debug = !state.debug;
			vm.active = () => { state.status = Gilt.Status.active; getData(); }
			vm.active = () => { state.status = Gilt.Status.active; getData(); }
			vm.upcoming = () => { state.status = Gilt.Status.upcoming; getData(); }
			vm.men = () => { state.subject = Gilt.Subject.men; getData(); }
			vm.women = () => { state.subject = Gilt.Subject.women; getData(); }
			vm.kids = () => { state.subject = Gilt.Subject.kids; getData(); }
			vm.home = () => { state.subject = Gilt.Subject.home; getData(); }
			vm.all = () => { state.subject = null; getData(); }
			getData();
			console.log('Gilt loaded');
		})
}