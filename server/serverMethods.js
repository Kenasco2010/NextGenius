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
    insertPlayerFollowers: function( playerId, followers) {
        Players.update(playerId ,{$addToSet:{followers:followers}}, function(err, id){

        })
    },
    insertAgentFollowing: function(agentId, following) {
        Agents.update(agentId ,{$addToSet:{following:following}}, function(err, id){

        });
    },
    insertClubFollowers: function( clubId, followers) {
        Clubs.update(clubId ,{$addToSet:{followers:followers}}, function(err, id){

        })
    },
    deletePlayerFollowers: function( playerId, followers) {
        Players.update(playerId ,{$pull:{followers:followers}}, function(err, id){

        })
    },
    deleteAgentFollowing: function(agentId, following) {
        Agents.update(agentId ,{$pull:{following:following}}, function(err, id){

        });
    },
    deleteClubFollowers: function( clubId, followers) {
        Clubs.update(clubId ,{$pull:{followers:followers}}, function(err, id){

        })
    },

});
