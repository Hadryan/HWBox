(function(){
	(function(){
		var app = angular.module('HWBox', []);
	
		app.controller("HWController", function(){
			this.hws = hwObjects;
		});
		
		app.controller("CourseController", function(){
			this.crss = crsObjects;
		});
		
		app.controller("TabController", function(){
			this.tab = 1;
			this.setTab = function(tabIndex){
				this.tab = tabIndex;
			};
			this.isSet = function(tabIndex){
				return this.tab === tabIndex;
			};
		});
	
	})();
	
	var hwObjects = [
		{ hwName: "HW3", hwDescription: "Registration System", hwDone: false, objectId: 55, dueDate: 1288323623006 },
		{ hwName: "HW1", hwDescription: "Student System", hwDone: false, objectId: 49, dueDate: 1288345623006 },
		{ hwName: "HW2", hwDescription: "MovieRentalSystem", hwDone: true, objectId: 51, dueDate: 1288327723006 },
		{ hwName: "Book VII", hwDescription: "Republic", hwDone: true, objectId: 27, dueDate: 1288428723006 }
	];
	
	var crsObjects = [
		{ objectId: "lpEwxENfdp", courseName: "CS201", userPtr: "7APbwNVqqq", courseColor: "f00" },
		{ objectId: "3XCxTPYUCP", courseName: "HUM111", userPtr: "7APbwNVqqq", courseColor: "ff0" },
	];
	
})();


