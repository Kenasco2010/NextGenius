
AutoForm.hooks({
    insertUploadClubVideosForm: {
        formToDoc: function(doc, ss, formId) {
            doc.relativeClubVideoUrl = Session.get('relativeClubVideoUrl');
            doc.absoluteClubVideoUrl = Session.get('absoluteClubVideoUrl');
            doc.delivery_status = "not-delivered";
            doc.userType = Session.get('userType');
            doc.myId = Clubs.findOne({owner: Meteor.userId()})._id;
            console.log(Router.current().params._id);
            //doc.owner = Meteor.userId();
            return doc;
        },
        onError: function(formType, error){
            console.log(error)
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('insertClubVideos', insertDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                }
                else {
                    reset_form_element( $('.file_bag') );
                    $(".progress").remove();
                    $("#clubVideoDisplay").remove();
                    $(".myClubVideoControlClass").remove();
                    $(".resetClubVideo").remove();
                    //$('#createEvent').modal('hide');
                    // return $('#eventSuccess').modal('show');
                    sAlert.success("You have successfully uploaded a video");

                }
            });
            this.done();
            return false;
        },
    },
});