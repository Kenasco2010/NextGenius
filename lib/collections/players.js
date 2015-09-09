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
	type: Date,
	label: "Date Of Birth ie MM/dd/yr",
	autoform: {
		type: "bootstrap-datepicker"
	}

},
gender: {
	type: String,
	label: "Either Male or Female",
	allowedValues: ['Male','Female'],
	 optional: true,
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
	label: "Current division you play in",

},
originCountry: {
	type: String,
	label: "Country of origin"
},
previousClub: {
	type: String,
	label: "Previous club you play for"
},
transferStatus: {
	type: String,
	label: "Current transfer status, Free or Not Free",
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
},
picture: {
	type: String,
	autoform: {
		afFieldInput:{
			type: 'fileUpload',
			collection: 'Images'
		},
		label: 'Upload Your Profile Picture'
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
    }
}));

