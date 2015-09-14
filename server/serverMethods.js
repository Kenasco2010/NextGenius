Meteor.methods({
    'deleteAccount': function(userId){
       if (this.userId === userId){
           return Meteor.users.remove(userId)
       }
       // console.log(userId)
    },
    insertVideos: function(doc) {
        UploadVideos.insert(doc, function(err, id){
        });
    },
});

//Meteor.methods({
//    insertVideos: function(doc) {
//        UploadVideos.insert(doc, function(err, id){
//        });
//    },
    //editEvents: function(eventId, doc) {
    //    Events.update({_id: eventId}, doc, function(err, success){
    //    });
    //},
    //insertEventsPicture: function(doc){
    //    EventPictures.insert(doc, function(err,id){
    //    })
    //}
//})