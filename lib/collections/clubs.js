Clubs = new Mongo.Collection('clubs');
Clubs.attachSchema(new SimpleSchema({
    clubName: {
        type: String,
        label: "Club Name",
        max: 50
    },
    agentName: {
        type: String,
        label: "Name of Club Agent"
    },
    yearOfEstablishment: {
        type: Date,
        label: "Date Of Establishment ie MM/dd/yr",
        optional: true,
        autoform: {
            type: "bootstrap-datepicker"
        },
        optional: true
    },
    address: {
        type: String,
        label: "Address of Club",
        max: 50
    },
    league: {
        type: String,
        label: "Which league is your club playing for?",
        allowedValues: ['Premier Division', 'First Division', 'Second Division', 'Third Division', 'Other']

    },

    license: {
        type: String,
        label: "Is the club Licensed",
        allowedValues: ['Yes', 'No']
    },

    country: {
        type: String,
        label: "Country of Origin"
    },
    province: {
        type: String,
        label: "Province"
    },
    //picture: {
    //    type: String,
    //    autoform: {
    //        afFieldInput:{
    //            type: 'fileUpload',
    //            collection: 'Images'
    //        },
    //        label: 'Upload Your Profile Picture'
    //    },
    //    optional: true
    //},
    clubAbsoluteImageUrl: {
        type: String,
        label: "select image",
        autoform: {
            omit: true
        }
    },
    clubRelativeImageUrl: {
        type: String,
        autoform: {
            omit: true
        }
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
    createdAt: {
        type: Date,
        label: Date,
        autoform: {
            omit: true
        },
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            }
        }
    },
    following: {
        type: [String],
        autoform: {
            omit: true
        },
        optional: true
    },
    followers: {
        type: [String],
        autoform: {
            omit: true
        },
        optional: true
    },

}));

