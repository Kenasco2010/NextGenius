
AutoForm.hooks({
    insertUploadPlayerVideosForm: {
        formToDoc: function(doc, ss, formId) {
            doc.relativePlayerVideoUrl = Session.get('relativePlayerVideoUrl');
            doc.absolutePlayerVideoUrl = Session.get('absolutePlayerVideoUrl');
            doc.delivery_status = "not-delivered"
            doc.userType = Session.get('userType');
            doc.myId = Players.findOne({owner: Meteor.userId()})._id;

            console.log(Router.current().params._id);
            //doc.owner = Meteor.userId();
            return doc;
        },
        onError: function(formType, error){
            console.log(error)
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('insertPlayerVideos', insertDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                }
                else {
                    reset_form_element( $('.file_bag') );
                    $(".progress").remove();
                    $("#playerVideoDisplay").remove();
                    $(".myvideocontrolclass").remove();
                    $(".resetPlayerVideo").remove();
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