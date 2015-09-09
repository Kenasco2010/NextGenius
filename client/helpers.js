
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn" && Meteor.user().profile.userType === "player") {
            Router.go('/');

        } else if(state === "signIn" && Meteor.user().profile.userType === "agentorscout") {
            Router.go('/agent-profile');
        }
         else if (state === "signIn" && Meteor.user().profile.userType === "clubsOracademy"){
            Router.go('/');
        }
        if (state === "signUp" && Meteor.user().profile.userType === "player") {
            Router.go('/insert-player-detail');

        } else if(state === "signUp" && Meteor.user().profile.userType === "agentorscout") {
            Router.go('/agent-info-entry');


        } else if (state === "signUp" && Meteor.user().profile.userType === "clubsOracademy"){
            Router.go('/insert-club-detail');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});

Template.clubAndAcademyProfile.helpers({
    isOwner: function() {
        return this.owner === Meteor.userId();
    },
    onError: function () {
        return function (error) { alert("Sorry! This operation was not successful"); console.log(error); };
    },
    onSuccess: function () {
        return function (result) { alert("You have successfully deleted this record"); console.log(result); };
    },
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Do you really want to delete "' + doc.clubName + '"?')) {
                this.remove();
            }
        };
    }
});

Template.updateClubAndAcademy.helpers({
    doc: function(){
        return Clubs.findOne();
    }
});

