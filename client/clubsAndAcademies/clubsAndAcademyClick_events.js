//Template.clubAndAcademyProfile.events({
//    'click .editClubProfile': function(e,t){
//        //alert("helloo you ")
//        Session.set('editclub', this._id)
//        //console.log(this._id)
//    }
//})

Template.clubAndAcademyProfile.events({
    "click #deleteClubAccount":function() {
        console.log("hellow click me la")
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


Template.viewClubAndAcademyDetails.events({
    "click .followClubButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('insertClubFollowers', clubId, followers, function (e) {
            if (!e) {
                alert("you are following this club");
                //$('.followClubButton').attr('disabled', 'disabled');
                $('.followClubButton').hide();
                $('.unFollowClubButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('insertAgentFollowing', agentId, following, function(e){
            if (!e) {
                alert("data saved in agents");
                //$('.followPlayerButton').attr('disabled', 'disabled');
                $('.followClubButton').hide();
                $('.unFollowClubButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
    "click .unFollowClubButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('deleteClubFollowers', clubId, followers, function (e) {
            if (!e) {
                alert("you have unfollowed this club");
                //$('.unFollowClubButton').attr('disabled', 'disabled');
                $('.followClubButton').show();
                $('.unFollowClubButton').hide();
            }
            else {
                return alert("Couldn't follow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('deleteAgentFollowing', agentId, following, function(e){
            if (!e) {
                alert("data removed in agents");
                //$('.unFollowClubButton').attr('disabled', 'disabled');
                $('.followClubButton').show();
                $('.unFollowClubButton').hide();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
});