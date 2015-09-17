//AutoForm.hooks({
//
//    insertFollowForm: {
//        formToDoc: function(doc, ss, formId) {
//            doc.userType = Session.get('userType');
//            if (Meteor.user().profile.userType === "clubsOracademy")
//                doc.pagefollowingId = Clubs.findOne({owner: Meteor.userId()})._id;
//            else{
//                doc.pagefollowingId = Players.findOne({owner: Meteor.userId()})._id;
//            }
//            console.log(Router.current().params._id);
//            //doc.owner = Meteor.userId();
//            return doc;
//        },
//        onError: function(formType, error){
//            console.log(error)
//        },
//        onSubmit: function (insertDoc, updateDoc, currentDoc) {
//            Meteor.call('insertPlayerFollows', insertDoc, function (error, result) {
//
//
//            });
//            this.done();
//            return false;
//        }
//    },
//});