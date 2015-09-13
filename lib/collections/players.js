Players = new Mongo.Collection('players');


SimpleSchema.messages({
  dateInPast: "Date cannot be in the past or today"
});


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
	},
	custom: function(){
		if(Meteor.isClient && this.isSet){
			if(moment(this.value) < moment()){
				return "dateInPast"
			}
		}
	}

},
gender: {
	type: String,
	label: "Either Male or Female",
	allowedValues: ['Male','Female'],
	 optional: true
},
position: {
	type: String,
	label: "Position you play",
	optional: true
},
club: {
	type: String,
	label: "Club you play for",
	optional: true
},
division: {
	type: String,
	label: "Current division you play in",
	optional: true

},
originCountry: {
	type: String,
	label: "Country of origin",
	optional: true
},
previousClub: {
	type: String,
	label: "Previous club you play for",
	optional: true
},
transferStatus: {
	type: String,
	label: "Current transfer status, Free or Not Free",
	allowedValues: ['Free', 'Not Free'],
	optional: true
},
height: {
	type: String,
	label: "Enter your height",
	optional: true,
	max: 10
},
weight: {
	type: String,
	label: "Enter your weight",
	optional: true,
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
	},
	optional: true
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

