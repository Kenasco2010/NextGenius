//Template.clubAndAcademyProfile.events({
//    'click .editClubProfile': function(e,t){
//        //alert("helloo you ")
//        Session.set('editclub', this._id)
//        //console.log(this._id)
//    }
//})

Template.clubAndAcademyProfile.events({
    "click #deleteClubAccount":function() {
        Meteor.call('deleteClubAccount', Meteor.userId(), function (e) {
            if (!e) {
                alert("Next Genius is sad to see you go...")
                return Router.go('/')
            }
            else {
                return alert("Couldn't delete account");

            }
        });
    }
});