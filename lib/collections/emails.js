Emails = new Mongo.Collection('emails');
Emails.attachSchema( new SimpleSchema ({
	email: {
		type: String,
		label: " ",
		regEx: SimpleSchema.RegEx.Email,
		max: 50
	}

}))