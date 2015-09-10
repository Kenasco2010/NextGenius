AutoForm.hooks({

	insertPlayerDetail:{
		onSuccess: function(operation, result, template){
			Router.go('allPlayers')
		}
	},


	updatePlayerDetail:{
		onSuccess: function(operation ,result, template){
			Router.go('allPlayers');
		}
	} 
});
