Emails = new Mongo.Collection('emails');
Emails.attachSchema( new SimpleSchema ({
	fullname: {
		type: String,
		label: " ",
		max: 50
	},
	email: {
		type: String,
		label: " ",
		max: 50
	}

}))