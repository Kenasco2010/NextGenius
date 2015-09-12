AutoForm.hooks({
    insertUploadVideosForm: {
        formToDoc: function(doc, ss, formId) {
            doc.relativeVideoUrl = Session.get('relativeVideoUrl');
            doc.absoluteVideoUrl = Session.get('absoluteVideoUrl');
            doc.delivery_status = "not-delivered"
            //doc.owner = Meteor.userId();
            return doc;
        },
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            Meteor.call('insertVideos', insertDoc, function (error, result) {
                if (error) {
                    this.done(new Error(error));
                }
                else {
                    reset_form_element( $('.upload-players-video-file_bag') );
                    $(".progress").remove();
                    $("#videoDisplay").remove();
                    $(".resetVideo").remove();
                    //$('#createEvent').modal('hide');
                    // return $('#eventSuccess').modal('show');
                    sweetAlert("Good job!", "You have successfully uploaded a video", "success");

                }
            });
            this.done();
            return false;
        },
    },
});