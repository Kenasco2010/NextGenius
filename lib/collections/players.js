Players = new Mongo.Collection('player');
Players.attachSchema(new SimpleSchema({

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
	dateofbirth: {
		type: Date,
		label: "Date Of Birth",
		autoform: {
			type: "bootstrap-datepicker"
		}
	},
	gender: {
		type: String,
		allowedValues: ['Male','Female']
	},
	position: {
		type: String,
		label: "Position you play"
	},
	club: {
		type: String,
		label: "Club you play for"
	},
	division: {
		type: String,
		label: "Division you play for"
	},
	country: {
		type: String,
		label: "Country of origin"
	},
	previousclub: {
		type: String,
		label: "Previous club you play for"
	},
	transferstatus: {
		type: String,
		label: "Club you play for",
		allowedValues: ['Free', 'Not Free']
	},
	height: {
		type: String,
		label: "Enter your height",
		max: 10
	},
	weight: {
		type: String,
		label: "Enter your weight",
		max: 10
	}

}));

