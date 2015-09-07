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
dateofBirth: {
	type: Date,
	label: "Date Of Birth",
	autoform: {
		type: "bootstrap-datepicker"
	}
},
gender: {
	type: String,
	allowedValues: ['Male','Female']
}

}))

