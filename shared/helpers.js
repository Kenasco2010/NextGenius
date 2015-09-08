
var mySubmitFunc = function(error, state){
    if (!error) {
        if (state === "signIn" && Meteor.user().profile.userType === "player") {
            Router.go('/');

        } else if(state === "signIn" && Meteor.user().profile.userType === "agentOrScout"){

            Router.go('/');
        } else if (state === "signIn" && Meteor.user().profile.userType === "clubsOrSchool"){
            Router.go('/');
        }
        if (state === "signUp" && Meteor.user().profile.userType === "player") {
            Router.go('/');
        } else if(state === "signUp" && Meteor.user().profile.userType === "agentOrScout"){

            Router.go('/');
        } else if (state === "signUp" && Meteor.user().profile.userType === "clubsOrSchool"){
            Router.go('/');

        }
    }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
