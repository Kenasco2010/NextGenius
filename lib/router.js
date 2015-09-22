Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});

Router.route('/', function () {

    this.render("indexPage");
},
{
    name: "indexPage",
    layoutTemplate:""

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
    name: "updatePlayerProfile",
    data: function () {
        return{
            playerProfile: Players.findOne({owner: Meteor.userId()}),
            playerVideos: UploadVideos.find({owner: Meteor.userId()}).fetch()
        }
    }
});

Router.route('/all-players', function () {
    this.render("allPlayers");
},{
    name: "allPlayers",
    data: function () {
        var _id = this.params._id;
        return{
            allPlayers: Players.find().fetch(),
            viewPlayerVideo: UploadVideos.find({myId: _id}).fetch()
        }
    }
});

Router.route('/view-player-details/:_id', function () {
    this.render("viewPlayerDetails");
},{

    name: "viewPlayerDetails",
    data:function () {
        var _id = this.params._id;
        //var owner = this.params.owner;
        return{
            viewPlayerProfile: Players.findOne(_id),
            viewPlayerVideo: UploadVideos.find({myId: _id}).fetch()

        }
    }

});
Router.route('/playerDetail1', function () {      // Route is the path after the url
  this.render("playerDetail1")              // 'playerDetail1' refers to the home template
}, {
  name: 'playerDetail1',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertPlayerDetail"
});
Router.route('/playerDetail2', function () {      // Route is the path after the url
  this.render("playerDetail2")              // 'playerDetail1' refers to the home template
}, {
  name: 'playerDetail2',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertPlayerDetail"
});
Router.route('/playerDetail3', function () {      // Route is the path after the url
  this.render("playerDetail3")              // 'playerDetail1' refers to the home template
}, {
  name: 'playerDetail3',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertPlayerDetail"
});
Router.route('/playerDetail4', function () {      // Route is the path after the url
  this.render("playerDetail4")              // 'playerDetail1' refers to the home template
}, {
  name: 'playerDetail4',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertPlayerDetail",
  data: function () {
   return {
    playerProfile: Players.findOne({owner: Meteor.userId()}),
}
}
});

//============Routes for agents and scouts==============
Router.route('/insert-agent-detail', function () {
    this.render("insertAgentAndScoutDetail");
},{

    name: "insertAgentAndScoutDetail"
});


Router.route('/all-agents', function(){
  this.render("allAgents");
},{

  name: "allAgents",
  data: function(){
    return {
      allAgents: Agents.find().fetch()
    }
  }
})



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

    name: "updateAgentAndScoutDetail",
    data: function () {
        updateAgent: Agents.findOne({owner: Meteor.userId()})
    }
});


Router.route('/:_id/my-feed', function () {
    this.render("myFeed");
},{

    name: "myFeed",
    data: function () {
        var _id = this.params._id;
        return {
            myFeed: Clubs.findOne(_id)
        }
    }
    //data: function () {
    //    var _id = Meteor.userId();
    //    return {
    //         agentId: Agents.findOne({owner: _id}).owner,
    //         //agentOwner: agentId.owner,
    //         myPlayerFeed: Players.find({followers: agentId}).fetch()
    //    }
    //}


});
Router.route('/:_id/feeddetails', function () {
    this.render("feedDetails");
},{

    name: "feedDetails",
    data: function () {
        var _id = this.params._id;
        return {
            playerFeed: Players.findOne(_id)
        }
    }
});

Router.route('/agentDetail1', function () {      // Route is the path after the url
  this.render("agentDetail1")              // 'playerDetail1' refers to the home template
}, {
  name: 'agentDetail1',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertAgentAndScoutDetail"
});
Router.route('/agentDetail2', function () {      // Route is the path after the url
  this.render("agentDetail2")              // 'playerDetail1' refers to the home template
}, {
  name: 'agentDetail2',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertAgentAndScoutDetail"
});
Router.route('/agentDetail3', function () {      // Route is the path after the url
  this.render("agentDetail3")              // 'playerDetail1' refers to the home template
}, {
  name: 'agentDetail3',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertAgentAndScoutDetail"
});
Router.route('/agentDetail4', function () {      // Route is the path after the url
  this.render("agentDetail4")              // 'playerDetail1' refers to the home template
}, {
  name: 'agentDetail4',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertAgentAndScoutDetail",
  data: function () {
   return {
    agentProfile: Agents.findOne({owner: Meteor.userId()}),
}
}
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

    name: "updateClubAndAcademy",
    data: function () {
        return {
            clubProfile: Clubs.findOne({owner: Meteor.userId()}),
        }

    }
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

    name: "allClubAndAcademy",
    data:function () {
        return{
            allClubs: Clubs.find().fetch()
        }
    }

});
Router.route('/view-club-details/:_id', function () {
    this.render("viewClubAndAcademyDetails");
},{

    name: "viewClubAndAcademyDetails",
    data:function () {
        var _id = this.params._id;
        var owner = this.params.owner;
        return{
            viewClubProfile: Clubs.findOne(_id),
            viewClubVideo: UploadVideos.find({myId: _id}).fetch()

        }
    }

});

Router.route('/insertClubsAndAcademy1', function () {      // Route is the path after the url
  this.render("insertClubsAndAcademy1")              // 'playerDetail1' refers to the home template
}, {
  name: 'insertClubsAndAcademy1',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertClubsAndAcademy"
});
Router.route('/insertClubsAndAcademy2', function () {      // Route is the path after the url
  this.render("insertClubsAndAcademy2")              // 'playerDetail1' refers to the home template
}, {
  name: 'insertClubsAndAcademy2',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertClubsAndAcademy"
});
Router.route('/insertClubsAndAcademy3', function () {      // Route is the path after the url
  this.render("insertClubsAndAcademy3")              // 'playerDetail1' refers to the home template
}, {
  name: 'insertClubsAndAcademy3',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertClubsAndAcademy"
});
Router.route('/insertClubsAndAcademy4', function () {      // Route is the path after the url
  this.render("insertClubsAndAcademy4")              // 'playerDetail1' refers to the home template
}, {
  name: 'insertClubsAndAcademy4',                      // name is an arbitrary value. Useful for helpers
  layoutTemplate: "insertClubsAndAcademy",
  data: function () {
   return {
    clubProfile: Clubs.findOne({owner: Meteor.userId()}),
}
}
});

// =========Routes for the videos==============

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


Router.route('/thisVideos', function(){
    this.render("thisVideos")
})

