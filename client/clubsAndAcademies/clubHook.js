
AutoForm.hooks({
    insertClubDetail:{
        formToDoc: function(doc, ss, formId) {
            doc.clubRelativeImageUrl = Session.get('clubRelativeImageUrl');
            doc.clubAbsoluteImageUrl = Session.get('clubAbsoluteImageUrl');
            doc.delivery_status = "not-delivered"
            console.log(doc);
            return doc;
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('insertClub', insertDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                }
                else {
                    reset_form_element( $('.clubPictureFile_bag') );
                    $(".progress").remove();
                    $(".resetclubimage").remove();
                    //$('#createEvent').modal('hide');
                    // return $('#eventSuccess').modal('show');
                    //swal("Good job!", "You have successfully added a historical place", "success");

                }
            });
            return false;
        },
        onSuccess: function(operation, result, template){
            Router.go('clubAndAcademyProfile')
        }
    },

    //updateClubDetail:{
    //    onSuccess: function(operation ,result, template){
    //        Router.go('clubAndAcademyProfile');
    //    }
    //},
    updateClubDetail: {
        formToDoc: function(doc, ss, formId, operation ,result, template) {
            doc.clubRelativeImageUrl = Session.get('clubRelativeImageUrl');
            doc.clubAbsoluteImageUrl = Session.get('clubAbsoluteImageUrl');
            return doc;
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('editClub', currentDoc._id, updateDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                };
            });
            this.done();
            return false;
        },
        onSuccess: function(formType, result) {
            reset_form_element( $('.updateClub-file_bag') );
            $(".progress").remove();
            $(".resetimage").remove();
            Router.go('clubAndAcademyProfile');

            //$('#editEvent').modal('hide');
            // return $('#EventPicturesSuccess').modal('show');
            //swal("Great Job!", "You have successfully updated this post", "success");

        }
    }

    //insertClubDetail:{
    //    onSuccess: function(operation, result, template){
    //        Router.go('clubAndAcademyProfile')
    //    }
    //},
    //onError: function(operation, error, template) {
    //console.log(error)
    //},
    //
    //updateClubDetail:{
    //    onSuccess: function(operation ,result, template){
    //        Router.go('clubAndAcademyProfile');
    //    }
    //}
});

//
//AutoForm.hooks({
//    insertPlayerDetail: {
//        formToDoc: function(doc, ss, formId) {
//            doc.playerRelativeImageUrl = Session.get('playerRelativeImageUrl');
//            doc.playerAbsoluteImageUrl = Session.get('playerAbsoluteImageUrl');
//            doc.delivery_status = "not-delivered"
//            //doc.owner = Meteor.userId();
//            return doc;
//        },
//        onSubmit: function (insertDoc, updateDoc, currentDoc) {
//            Meteor.call('insertPlayer', insertDoc, function (error, result) {
//                if (error) {
//                    this.done(new Error(error));
//                }
//                else {
//                    reset_form_element( $('.playerPictureFile_bag') );
//                    $(".progress").remove();
//                    $(".resetplayerimage").remove();
//                    //$('#createEvent').modal('hide');
//                    // return $('#eventSuccess').modal('show');
//                    //swal("Good job!", "You have successfully added a historical place", "success");
//
//                }
//            });
//            return false;
//        },
//    },
//});
