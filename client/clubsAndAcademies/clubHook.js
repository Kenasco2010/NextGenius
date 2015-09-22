AutoForm.hooks({
    insertClubDetail1:{
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
                }
            });
            return false;
        },
        onSuccess: function(operation, result, template){
            Router.go('insertClubsAndAcademy2')
        }
    },

    insertClubDetail2:{
        onSuccess: function(operation, result, template){
            Router.go('insertClubsAndAcademy3');
        }
    },
    insertClubDetail3:{
        onSuccess: function(operation, result, template){
            Router.go('insertClubsAndAcademy4');
        }
    },
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

        }
    }
});


