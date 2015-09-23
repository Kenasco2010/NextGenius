Template.navigation.events({
	'click #profiles': function () {
		if (Meteor.users.findOne().profile.userType === "clubsOracademy") {
			Router.go('clubAndAcademyProfile')
		} else {
			if (Meteor.users.findOne().profile.userType === "player") {
				Router.go('playerProfile')
			} else {
				if (Meteor.users.findOne().profile.userType === "agentorscout") {
					Router.go('agentProfile')
				}
			}
		}
	}
});