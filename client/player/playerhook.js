AutoForm.hooks({
	playerForm:{
		onSuccess: function(operation, result, template){
			console.log("Submit successful");
			Router.go('playerProfile')
		}
	}, 
	updatePlayerDetail:{
		onSuccess: function(operation ,result, template){
			Router.go('allPlayers');
		}
	} 
})