(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	//This is the controller that will be responsible for the list 1
	ToBuyController.inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var list1 = this;

		list1.toBuyList = ShoppingListCheckOffService.toBuy();

		list1.remove = function (itemIndex) {
			ShoppingListCheckOffService.remove(itemIndex);
		};

		list1.message = function () {
			return (list1.toBuyList == "");
		};
	}

	//This is the controller that will be responsible for the list 2
	AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var list2 = this;

		
		list2.boughtList = ShoppingListCheckOffService.bought;

		list2.message = function () {
			return (list2.boughtList == "");
		};
		
		
	}

	//This is the service method which will perform all the business logic and share the data between the 2 controllers as well
	function ShoppingListCheckOffService () {
		var service = this;

		service.toBuyList = [];
		service.bought = [];

		service.initialList = [
		{
			name: 'Cookies',
			quantity: '3 bags'},
		{
			name: 'Coke',
			quantity: '3 bottles'},
		{
			name: 'Chips',
			quantity: '3 bags'},
		{
			name: 'Burgers',
			quantity: '2'},
		{
			name: 'Beer',
			quantity: '2 bottles'}
		];

		service.toBuy = function () {
			service.toBuyList = service.initialList;
			return service.toBuyList;

		};

		service.remove = function (itemIndex) {
			var x = service.toBuyList.splice(itemIndex, 1);
			console.log(x);
			service.bought.push(x);
			console.log(service.bought);	
			return service.bought;	
		};
	}

})();