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
    insertPlayer: function(doc) {
        Players.insert(doc, function(err, id){
        });
    },
    editPlayer: function(playerId, doc) {
        Players.update({_id: playerId}, doc, function(err, success){
        });
    },

    insertClub: function(doc) {
    Clubs.insert(doc, function(err, id){
    });
},
    editClub: function(clubId, doc) {
        Clubs.update({_id: clubId}, doc, function(err, success){
        });
    },
    insertAgentAndScout: function(doc) {
        Agents.insert(doc, function(err, id){
        });
    },
    editAgent: function(agentId, doc) {
        Agents.update({_id: agentId}, doc, function(err, success){
        });
    },
});
