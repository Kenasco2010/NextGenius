//Template.viewPlayerDetails.events({
//    "click .followPlayerButton": function () {
//        var myId = this._id;
//        Meteor.call('insertPlayerFollows', myId, function (e) {
//            if (!e) {
//                alert("you are following me");
//                $('.followPlayerButton').attr('disabled', 'disabled');
//
//            }
//            else {
//                return alert("Couldn't follow this player");
//
//            }
//            //console.log(myId.count())
//        });
//    }
//});