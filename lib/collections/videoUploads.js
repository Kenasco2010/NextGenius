UploadVideos = new Mongo.Collection('uploadVideos');
UploadVideos.attachSchema(new SimpleSchema({

    absoluteVideoUrl: {
        type: String,
        label: "Please Upload a Video",
        autoform: {
            omit: true
        }
    },
    relativeVideoUrl: {
        type: String,
        autoform: {
            omit: true
        }
    },
    videoCaption:{
        type:String,
        optional: true,
        label: "Please add a caption"
    }
}));
