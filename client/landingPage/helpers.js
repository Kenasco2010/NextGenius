// Template.index.events({
// 	'click #submitemail': function () {
// 		sweetAlert("Thanks,  We have recieved you email, we will inform you of any updates available.");
// 	}
// });


AutoForm.hooks({
	insertEmailsForm:{
		onSuccess: function(operation, result, template){
			sweetAlert("Thanks, we will let you know when we launch.", "success");
			Router.go('indexPage')
		},
		onError: function(operation, error){
			sweetAlert("Sorry", "Please fill in the details correctly", "error")
		}
	}
})
