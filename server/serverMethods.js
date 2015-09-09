Meteor.methods({
    'deleteAccount': function(userId){
       if (this.userId === userId){
           return Meteor.users.remove(userId)
       }
       // console.log(userId)
    }
});

