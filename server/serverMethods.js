Meteor.methods({
    'deleteClubAccount': function(userId){
       if (this.userId === userId){
           return Meteor.users.remove(userId)
       }
       // console.log(userId)
    }
});

