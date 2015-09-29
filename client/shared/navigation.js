Template.navigation.events({
	'click #profiles': function () {
		if (Meteor.user().profile.userType === "clubsOracademy") {
			Router.go('clubAndAcademyProfile')
		} else {
			if (Meteor.user().profile.userType === "player") {
				Router.go('playerProfile')
			} else {
				if (Meteor.user().profile.userType === "agentorscout") {
					Router.go('agentProfile')
				}
			}
		}
	}
});