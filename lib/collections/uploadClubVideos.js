UploadClubVideos = new Mongo.Collection('uploadclubvideos');
UploadClubVideos.attachSchema(new SimpleSchema({

    absoluteClubVideoUrl: {
        type: String,
        label: "Please Upload a Video",
        autoform: {
            omit: true
        }
    },
    relativeClubVideoUrl: {
        type: String,
        autoform: {
            omit: true
        }
    },
    videoCaption:{
        type:String,
        optional: true,
        label: "Please add a caption"
    },
    videoDescription:{
        type:String,
        optional: true,
        label: "Please write a short description about your video"
    },
    userType: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            if (this.isInsert){
                return Meteor.user().profile.userType;
            }
        }
    },
    myId: {
        type: String,
        autoform: {
            omit: true
        }
    },
    owner: {
        type: String,
        autoform: {
            omit: true
        },
        autoValue: function(){
            if (this.isInsert){
                return Meteor.userId();
            }
        }
    }
}));
