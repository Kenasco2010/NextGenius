Clubs = new Mongo.Collection('clubs');
Clubs.attachSchema(new SimpleSchema({

    clubName: {
        type: String,
        label: "First Name",
        max: 50
    },
    yearOfEstablishment: {
        type: String,
        label: "Last Name",
        max: 50
    },
    location: {
        type: String,
        label: "Last Name",
        max: 50
    },
    Address: {
        type: String,
        allowedValues: ['Male','Female']
    },
    License: {
        type: String,
        label: "License"
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

