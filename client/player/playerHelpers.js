Template.clubAndAcademyProfile.events({
    'click .updatePlayerDetail': function(e,t){
        //alert("helloo you ")
        Session.set('editclub', this._id)
        //console.log(this._id)
    }
})

Template.clubAndAcademyProfile.events({
    'click .deletePlayerAccount':function(){
        Meteor.users.remove({_id:this._id});
        Router.go('/')
    }
})





