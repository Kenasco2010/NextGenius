AutoForm.hooks({
    insertAgentDetail1:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail2');
            // console.log(result);
        },
        onError: function(formType, error) {
            console.log(error);
        },
        formToDoc: function(doc, ss, formId) {
            doc.agentRelativeImageUrl = Session.get('agentRelativeImageUrl');
            doc.agentAbsoluteImageUrl = Session.get('agentAbsoluteImageUrl');
            doc.delivery_status = "not-delivered"
            //doc.owner = Meteor.userId();
            return doc;
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('insertAgentAndScout', insertDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                }
                else {
                    reset_form_element( $('.agentPictureFile_bag') );
                    $(".progress").remove();
                    $(".resetagentimage").remove();
                    //$('#createEvent').modal('hide');
                    // return $('#eventSuccess').modal('show');
                    //swal("Good job!", "You have successfully added a historical place", "success");

                }
            });
            return false;
        },
        // Called when any operation succeeds, where operation will be
        // "insert", "update", "submit", or the method name.
    },
    insertAgentDetail2:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail3');
        }
    },
    insertAgentDetail3:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail4');
        }
    },
    updateAgentDetail: {
        formToDoc: function(doc, ss, formId) {
            doc.agentRelativeImageUrl = Session.get('agentRelativeImageUrl');
            doc.agentAbsoluteImageUrl = Session.get('agentAbsoluteImageUrl');
            return doc;
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('editAgent', currentDoc._id, updateDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                };
            });
            this.done();
            return false;
        },
        onSuccess: function(formType, result, operation, template) {
            reset_form_element( $('.updateAgent-file_bag') );
            $(".progress").remove();
            $(".resetimage").remove();
            Router.go('agentProfile');

            //$('#editEvent').modal('hide');
            // return $('#EventPicturesSuccess').modal('show');
            //swal("Great Job!", "You have successfully updated this post", "success");

        }
        //onSuccess: function(operation, result, template) {
            //console.log("updated");
            //Router.go('agentProfile');
            //return sAlert.success('Nice, all done!', {timeout: '20000', onRouteClose: false, position: 'top-left'});

        },
        onError: function(operation, error, template) {
            console.log(error);
        }

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
})
