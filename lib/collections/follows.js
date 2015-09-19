//Follows = new Mongo.Collection('follows');
//Follows.attachSchema( new SimpleSchema ({
//
//    pagefollowingId: {
//        type: String,
//        autoform: {
//            omit: true
//        }
//    },
//    userType: {
//        type: String,
//        autoform: {
//            omit: true
//        },
//        autoValue: function(){
//            return Meteor.user().profile.userType;
//        }
//    },
//    owner: {
//        type: String,
//        autoform: {
//            omit: true
//        },
//        autoValue: function(){
//            return Meteor.userId();
//        }
//    }
//}));