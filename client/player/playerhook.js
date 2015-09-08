AutoForm.hooks({
	playerForm:{
		onSuccess: function(operation, result, template){
			console.log("Submit successful");
			Router.go('playerprofile')
		}
	}
})