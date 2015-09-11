Template.uploadVideos.helpers({
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
    imagedoc: function(){
        return Session.get('absoluteVideoUrl');

    }
});

