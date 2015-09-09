Agents = new Mongo.Collection('agents');
Agents.attachSchema(new SimpleSchema({

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
	gender: {
		type: String,
		allowedValues: ['Male','Female']
	},
	license: {
		type: String,
		label: "License"
	},
	bio: {
		type: String,
		label: "Bio"
	},
	nationality: {
		type: String,
		label: "Nationality"
	},
	region: {
		type: String,
		label: "Region of activity"
	},
	typeOfAgent: {
		type: String,
		label: "Agent type"
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			return Meteor.userId();
		}
	}

}));

