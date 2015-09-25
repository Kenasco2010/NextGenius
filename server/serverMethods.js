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
    insertPlayerVideos: function(doc) {
        UploadPlayerVideos.insert(doc, function(err, id){
        });
    },
    insertClubVideos: function(doc) {
        UploadClubVideos.insert(doc, function(err, id){
        });
    },
    insertPlayerFollowers: function( playerId, agentId) {
        Players.update(playerId ,{$addToSet:{followers:agentId}}, function(err, id){

        })
    },
    insertAgentFollowing: function(agentId, playerId) {
        //console.log(agentId);
        //console.log(playerId);
        Agents.update(agentId ,{$addToSet:{following:playerId}}, function(err, id){
        });
    },
    insertClubAgentFollowing: function(agentId, clubId) {
        Agents.update(agentId ,{$addToSet:{following:clubId}}, function(err, id){

        });
    },
    insertClubFollowers: function( clubId, agentId) {
        Clubs.update(clubId ,{$addToSet:{followers:agentId}}, function(err, id){

        })
    },
    deletePlayerFollowers: function( playerId, followers) {
        Players.update(playerId ,{$pull:{followers:followers}}, function(err, id){

        })
    },
    deleteAgentFollowing: function(agentId, clubId) {
        Agents.update(agentId ,{$pull:{following:clubId}}, function(err, id){

        });
    },
    deleteClubFollowers: function( clubId, agentId) {
        Clubs.update(clubId ,{$pull:{followers:agentId}}, function(err, id){

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
