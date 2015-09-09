Template.clubAndAcademyProfile.events({
    'click .editClubProfile': function(e,t){
        //alert("helloo you ")
        Session.set('editclub', this._id)
        //console.log(this._id)
    }
})

Template.clubAndAcademyProfile.events({
    'click .deleteClubAccount':function(){
        Meteor.users.remove({_id:this._id});
        Router.go('/')
    }
})