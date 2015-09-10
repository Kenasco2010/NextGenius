Emails = new Mongo.Collection('emails');
Emails.attachSchema( new SimpleSchema ({
	fullname: {
		type: String,
		max: 50
	},
	email: {
		type: String,
		regEx: SimpleSchema.RegEx.Email,
		max: 50
	}

}))