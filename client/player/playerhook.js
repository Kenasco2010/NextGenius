AutoForm.hooks({

	insertPlayerDetail:{
		onSuccess: function(operation, result, template){
			Router.go('playerProfile')
		}
	},


	updatePlayerDetail:{
		onSuccess: function(operation ,result, template){
			Router.go('playerProfile');
		}
	} 
});
