Agents = new Mongo.Collection('agents');
Agents.attachSchema(new SimpleSchema({

	firstname: {
		type: String,
		label: "First Name",
		max: 50
	},
	lastname: {
		type: String,
		label: "Last Name",
		max: 50
	},
	gender: {
		type: String,
		allowedValues: ['Male','Female']
	},
	License: {
		type: String,
		label: "License"
	},
	Bio: {
		type: String,
		label: "Bio"
	},
	Nationality: {
		type: String,
		label: "Nationality"
	},
	Region: {
		type: String,
		label: "Region of activity"
	},
	Type: {
		type: String,
		label: "Agent type"
	}

}));

