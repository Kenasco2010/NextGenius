Players = new Mongo.Collection('player');

Applications.attachSchema(new SimpleSchema({
	
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
		autoform: {
			type: "bootstrap-datepicker"
		},
	label: "Enter your date of Birth"
	}

}));