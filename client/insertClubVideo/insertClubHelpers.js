Template.uploadClubVideos.helpers({
    "files": function(){
        if (Session.get('fileExists')) {
            return S3.collection.find();
        };
    },
    'complete': function() {
        if (this.status == 'complete') {
            return true;
        };
    },
    //imagedoc: function(){
    //    return Session.get('absoluteVideoUrl');
    //
    //}
});

Template.uploadClubVideos.rendered = function () {
    $(".progress").remove();
    $("#clubVideoDisplay").remove();
    $("#resetclubvideo").remove();
    $(".myClubVideoControlClass").remove();
    $(".resetClubVideo").remove();
};