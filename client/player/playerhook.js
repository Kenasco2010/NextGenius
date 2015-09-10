AutoForm.hooks({
	updatePlayerDetail:{
		onSuccess: function(operation ,result, template){
			Router.go('allPlayers');
		}
	} 
})

AutoForm.hooks({
	insertPlayerDetail:{
		onSuccess: function(operation, result, template){
			Router.go('allPlayers')
		}
	}
})