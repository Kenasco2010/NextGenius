Players = new Mongo.Collection('players');


Players.attachSchema(new SimpleSchema({


	firstName: {
		type: String,
		label: "First Name",
		max: 50
	},
	lastName: {
		type: String,
		label: "Last Name",
		max: 50
	},
	dateOfBirth: {
		type: String,
		label: "Date Of Birth",
		optional:true
	},
	gender: {
		type: String,
		label: "Select Either Male or Female",
		allowedValues: ['Male','Female'],
		optional: true
	},
	position: {
		type: String,
		label: "Position you play",
		allowedValues: ['GoalKeeper', 'Center-Back', 'Center-Half', 'Center-Defend', 'Left-Back', 'Right-Back', 'Left-Wing-Back', 'Right-Wing-Back', 'Sweeper', 'Defending-Midfielder', 'Holding-Midfielder', 'Central-Midfielder', 'Box-to-Box-Midfielder', 'Attacking-Midfielder', 'Left-Wing-Midfielder', 'Right-Wing-Midfielder', 'Center-Forward/Striker'],
		optional: true
	},
	club: {
		type: String,
		label: "Club you play for",
		optional: true
	},
	division: {
		type: String,
		label: "Current division you play in",
		allowedValues: ['Premier Division', 'First Division', 'Second Division', 'Third Division', 'Other'],
		optional: true
	},
	originCountry: {
		type: String,
		label: "Country of origin",
		optional: true
	},
	previousClub: {
		type: String,
		label: "Previous club you played for",
		optional: true
	},
	transferStatus: {
		type: String,
		label: "Current transfer status, Free or Not Free",
		allowedValues: ['Free', 'Not Free'],
		optional: true
	},
	height: {
		type: String,
		label: "Enter your height",
		optional: true,
		max: 10
	},
	weight: {
		type: String,
		label: "Enter your weight",
		optional: true,
		max: 10
	},

	playerAbsoluteImageUrl: {
		type: String,
		label: "select image",
		autoform: {
			omit: true
		}
	},
	playerRelativeImageUrl: {
		type: String,
		autoform: {
			omit: true
		}
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			if (this.isInsert){
				return Meteor.userId();
			}
		}
	},
	following: {
		type: [String],
		autoform: {
			omit: true
		},
		optional: true
	},
	followers: {
		type: [String],
		autoform: {
			omit: true
		},
		optional: true
	},
	
}));
