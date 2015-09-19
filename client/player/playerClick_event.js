Template.playerProfile.events({
    "click #deletePlayerAccount":function() {
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

//Template.viewPlayerDetails.events({
//    "click .followButton": function () {
//        alert("You are following me. Thanx")
//    }
//});

Template.viewPlayerDetails.events({
    "click .followPlayerButton": function () {
        var followers = Meteor.userId();
        var playerId = this._id;
        Meteor.call('insertPlayerFollowers', playerId, followers, function (e) {
            if (!e) {
                alert("data saved in players");
                $('.followPlayerButton').hide();
                $('.unFollowPlayerButton').show();

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
                $('.followPlayerButton').hide();
                $('.unFollowPlayerButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
    "click .unFollowPlayerButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('deletePlayerFollowers', clubId, followers, function (e) {
            if (!e) {
                alert("you have unfollowed this player");
                $('.followPlayerButton').show();
                $('.unFollowPlayerButton').hide();

            }
            else {
                return alert("Couldn't unfollow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('deleteAgentFollowing', agentId, following, function(e){
            if (!e) {
                alert("data removed in agents");
                $('.followPlayerButton').show();
                $('.unFollowPlayerButton').hide();


            }
            else {
                return alert("Couldn't delete data from agent");

            }
        })
    },

});