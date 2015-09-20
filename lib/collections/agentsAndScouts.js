Agents = new Mongo.Collection('agents');
Agents.attachSchema(new SimpleSchema({

	picture: {
		type: String,
		autoform: {
			afFieldInput:{
				type: 'fileUpload',
				collection: 'Agentimage'
			},
			label: 'Upload Your Profile Picture'
		},
		optional: true
	},
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
		label: "License",
		optional: true
	},
	bio: {
		type: String,
		label: "Bio",
		optional: true
	},
	nationality: {
		type: String,
		label: "Nationality",
		optional: true
	},
	region: {
		type: String,
		label: "Region of activity",
		optional: true
	},
	typeOfAgent: {
		type: String,
		label: "Agent type",
		allowedValues: ['Agents', 'Scouts'],
		optional: true
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			return Meteor.userId();
		}
	},
	following: {
		type: [String],
		autoform: {
			omit: true
		},
		optional: true
	},

}));

