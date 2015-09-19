AutoForm.hooks({

	insertPlayerDetail1:{
		onSuccess: function(operation, result, template){
			Router.go('playerDetail2');
			// console.log(result);
		},
		onError: function(formType, error) {
			console.log("problem");
		},
	},
	insertPlayerDetail2:{
		onSuccess: function(operation, result, template){
			Router.go('playerDetail3');
		}
	},
	insertPlayerDetail3:{
		onSuccess: function(operation, result, template){
			Router.go('playerDetail4');
		}
	},
	updatePlayerDetail:{
		onSuccess: function(operation ,result, template){
			Router.go('playerProfile');
		}
	} 
});
