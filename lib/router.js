Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});

Router.route('/', function () {
    this.render("");
},
{
    name: ""
});

Router.route('/landingPage', function(){
    this.render("landingPage");
},{
    name: "landingPage"
})

// ===========Routes for signIn and signUps==========

Router.route('/sign-up', function () {
    this.render("signUp");
},
{
    name: "signUp"
});
Router.route('/sign-in', function () {
    this.render("signIn");
},
{
    name: "signIn"
});
Router.route('/signout', function () {
    this.render('signIn')
},
{
    name: 'signout',
    data: function () {
        return Meteor.logout();

    }
});

// ==========Routes for player details=============

Router.route('/insert-player-detail', function () {
	this.render("insertPlayerDetail");
},{

	name: "insertPlayerDetail"
});

Router.route('/player-profile', function () {
	this.render("playerProfile");
},{
	name: "playerProfile",
    data: function () {
     return {
        playerProfile: Players.findOne({owner: Meteor.userId()}),
         playerVideos: UploadVideos.find({owner: Meteor.userId()}).fetch()

     }

}
});

Router.route('/update-player-profile', function () {
    this.render("updatePlayerProfile");
},{
    name: "updatePlayerProfile"
});

Router.route('/all-players', function () {
    this.render("allPlayers");
},{
    name: "allPlayers",
    data: function () {
        return{
            allPlayers: Players.find().fetch()
        }

    }
});

//============Routes for agents and scouts==============
Router.route('/insert-agent-detail', function () {
    this.render("insertAgentAndScoutDetail");
},{

    name: "insertAgentAndScoutDetail"
});



Router.route('/agent-profile/', function () {
    this.render("agentProfile");
},{

    name: "agentProfile",
    data: function () {

        return{
            agent: Agents.findOne({owner: Meteor.userId()})

        }
    }
});
Router.route('/update-agent-and-scout-detail', function () {
    this.render("updateAgentAndScoutDetail");
},{

    name: "updateAgentAndScoutDetail"
});


/*
*============== Routes for club and Academy================
* */
Router.route('/insert-club-detail', function () {
    this.render("insertClubsAndAcademy");
},{

    name: "insertClubsAndAcademy"
});

Router.route('/update-club-detail', function () {
    this.render("updateClubAndAcademy");
},{

    name: "updateClubAndAcademy"
});

Router.route('/club-profile', function () {
    this.render("clubAndAcademyProfile");
},{

    name: "clubAndAcademyProfile",
    data: function () {
        return{
            clubProfile: Clubs.findOne({owner: Meteor.userId()}),
            clubVideos: UploadVideos.find({owner: Meteor.userId()}).fetch()

        }
    }
});

Router.route('/all-clubs', function () {
    this.render("allClubAndAcademy");
},{

    name: "allClubAndAcademy"

});
Router.route('/videos', function () {
    this.render("allVideos");
},{

    name: "allVideos",
    data: function () {
        if(Meteor.user())
        return {
            allVideos: UploadVideos.find({}).fetch()
        }
        else{
            this.render('signUp')
        }
    }

});



