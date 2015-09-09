Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});

Router.route('/', function () {
    this.render("index");
},
{
    name: "index"
});

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
Router.route('/signout', function(){
    this.render('signIn')
},
{
    name: 'signout',
    data: function(){
        return Meteor.logout();

    }
});

// ==========Routes for player details=============

Router.route('/insert-player-detail', function(){
	this.render("insertPlayerDetail");
},{

	name: "insertPlayerDetail"
});

Router.route('/player-profile/:_id', function(){
	this.render("playerProfile");
},{
	name: "playerProfile",
    data: function(){
     var _id = this.params._id
     return {
        playerProfile: Players.findOne(_id)
    }

}
});

Router.route('/all-players', function(){
    this.render("allPlayers");
},{
    name: "allPlayers",
    data: function(){
        return{
            allPlayers: Players.find().fetch()
        }
        
    }
});

//============Routes for agents and scouts============== 
Router.route('/insert-agent-detail', function(){
    this.render("insertAgentAndScoutDetail");
},{

    name: "insertAgentAndScoutDetail"
});
Router.route('/edit-player-profile/edit', function(){
    this.render("editPlayerProfile");
},{
    name: "editPlayerProfile"
});


Router.route('/agent-profile/', function(){
    this.render("agentProfile");
},{

    name: "agentProfile",
    data: function(){

        return{
            agent: Agents.findOne()
        }
    }
});
Router.route('/update-agent-and-scout-detail', function(){
    this.render("updateAgentAndScoutDetail");
},{

    name: "updateAgentAndScoutDetail"
});


/*
*============== Routes for club and Academy================
* */
Router.route('/insert-club-detail', function(){
    this.render("insertClubsAndAcademy");
},{

    name: "insertClubsAndAcademy"
});

Router.route('/update-club-detail', function(){
    this.render("updateClubAndAcademy");
},{

    name: "updateClubAndAcademy"
});

Router.route('/club-profile', function(){
    this.render("clubAndAcademyProfile");
},{

    name: "clubAndAcademyProfile",
    data: function (){
        return{
            clubProfile: Clubs.findOne()
        }
    }
});


