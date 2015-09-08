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
        type: String,
        label: "Year of Establishment",
        max: 50
    },
    location: {
        type: String,
        label: "Location of Club",
        max: 50
    },
    address: {
        type: String,
        label: "Address of Club",
        max: 50
    },
    league: {
        type: String,
        label: "Which league is your club playing for?"
    },

    license: {
        type: String,
        label: "Is the club Licensed"
    },

    country: {
        type: String,
        label: "Country of Origin"
    },
    province: {
        type: String,
        label: "Province"
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
}

}));

