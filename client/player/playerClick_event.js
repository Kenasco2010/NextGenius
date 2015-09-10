
Template.playerProfile.events({
    "click #deletePlayerAccount":function() {
        Meteor.call('deleteAccount', Meteor.userId(), function (e) {
            if (!e) {
                alert("Next Genius is sad to see you go...")
                return Router.go('/')
            }
            else {
                return alert("Couldn't delete account");

            }
        });
    }
});