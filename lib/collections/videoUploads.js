//UploadVideos = new Mongo.Collection('uploadVideos');
//UploadVideos.attachSchema(new SimpleSchema({
//
//    absoluteVideoUrl: {
//        type: String,
//        label: "Please Upload a Video",
//        autoform: {
//            omit: true
//        }
//    },
//    relativeVideoUrl: {
//        type: String,
//        autoform: {
//            omit: true
//        }
//    },
//    videoCaption:{
//        type:String,
//        optional: true,
//        label: "Please add a caption"
//    },
//    userType: {
//        type: String,
//        autoform: {
//            omit: true
//        },
//        autoValue: function(){
//            if (this.isInsert){
//                return Meteor.user().profile.userType;
//            }
//        }
//
//    },
//    myId: {
//        type: String,
//        autoform: {
//            omit: true
//        }
//    },
//    owner: {
//        type: String,
//        autoform: {
//            omit: true
//        },
//        autoValue: function(){
//            if (this.isInsert){
//                return Meteor.userId();
//            }
//        }
//    }
//}));
