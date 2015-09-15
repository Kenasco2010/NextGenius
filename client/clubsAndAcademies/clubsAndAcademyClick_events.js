//Template.clubAndAcademyProfile.events({
//    'click .editClubProfile': function(e,t){
//        //alert("helloo you ")
//        Session.set('editclub', this._id)
//        //console.log(this._id)
//    }
//})

Template.clubAndAcademyProfile.events({
    "click #deleteAgentAccount":function() {
        Meteor.call('deleteAccount', Meteor.userId(), function (e) {
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

//Template.viewClubAndAcademyDetails.events({
//    "click .owner": function() {
//        //var owner = this._id
//        console.log(this.viewClubProfile.owner)
//    }
//
//});