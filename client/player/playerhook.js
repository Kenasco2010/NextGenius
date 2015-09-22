AutoForm.hooks({

	insertPlayerDetail1:{
		onSuccess: function(operation, result, template){
			Router.go('playerDetail2');
			// console.log(result);
		},
		onError: function(formType, error) {
			console.log(error);
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

AutoForm.hooks({
	insertPlayerDetail1: {
		formToDoc: function(doc, ss, formId) {
			doc.playerRelativeImageUrl = Session.get('playerRelativeImageUrl');
			doc.playerAbsoluteImageUrl = Session.get('playerAbsoluteImageUrl');
			doc.delivery_status = "not-delivered"
			//doc.owner = Meteor.userId();
			return doc;
		},
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('insertPlayer', insertDoc, function (error, result) {
				if (error) {
					this.done(new Error(error));
				}
				else {
					reset_form_element( $('.playerPictureFile_bag') );
					$(".progress").remove();
					$(".resetplayerimage").remove();
					//$('#createEvent').modal('hide');
					// return $('#eventSuccess').modal('show');
					//swal("Good job!", "You have successfully added a historical place", "success");

				}
			});
			return false;
		},
	},
});


AutoForm.hooks({
	updatePlayerDetail: {
		formToDoc: function(doc, ss, formId) {
			doc.playerRelativeImageUrl = Session.get('playerRelativeImageUrl');
			doc.playerAbsoluteImageUrl = Session.get('playerAbsoluteImageUrl');
			return doc;
		},
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			Meteor.call('editPlayer', currentDoc._id, updateDoc, function (error, result) {
				if (error) {
					this.done(new Error(error));
				};
			});
			this.done();
			return false;
		},
		onSuccess: function(formType, result) {
			reset_form_element( $('.updatePlayer-file_bag') );
			$(".progress").remove();
			$(".resetimage").remove();
			//$('#editEvent').modal('hide');
			// return $('#EventPicturesSuccess').modal('show');
			//swal("Great Job!", "You have successfully updated this post", "success");

		}
	}
});
