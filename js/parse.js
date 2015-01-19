(function() {

var app = angular.module('parse', []);

Parse.initialize("cf86jsjcwXfhr8OkIHl0Viizqtyh3XdfMmRc0Fmr", "kwQA7fHYuwjOLWDMXBJtPATFwKeJwmINGw5GgqT3");

this.pAddHW = function(newHW) {
	    
		var fHomework = Parse.Object.extend("fHomework");
		var testObject = new fHomework();
		
		
		//alert( newHW.hwDone + " " + newHW.hwDescription + " " + newHW.hwName + " " + newHW.hwDueDate );
		
		testObject.set("hwDone", newHW.hwDone);
		testObject.set("hwDescription", newHW.hwDescription);
		testObject.set("hwName", newHW.hwName);
		
		var date = new Date(newHW.hwDueDate);
		
		testObject.set("hwDueDate", date);
		
		
		testObject.save(null, {
			success: function(object) {
				alert('New object created with objectId');
			},
			error: function(model, error) {
				alert('New object NOT created with objectId: ' + error.message);
			},
			wait: true
		});
};
		

		
})();
