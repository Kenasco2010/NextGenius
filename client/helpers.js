
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
            Router.go('/');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});

Template.editPlayerProfile.helpers({
    updateDoc: function () {
        return Players.findOne();
    }
});

Template.playerProfile.helpers({
    isOwner: function () {
        return this.owner === Meteor.userId();
    }
});