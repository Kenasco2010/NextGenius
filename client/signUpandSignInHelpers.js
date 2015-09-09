
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
            Router.go('/insert-agent-detail');


        } else if (state === "signUp" && Meteor.user().profile.userType === "clubsOracademy"){
            Router.go('/insert-club-detail');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
