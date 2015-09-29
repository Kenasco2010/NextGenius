Template.insertAgentAndScoutDetail.rendered = function () {
	function nextTab(elem) {
		$(elem).next().find('a[data-toggle="tab"]').click();
	}
	function prevTab(elem) {
		$(elem).prev().find('a[data-toggle="tab"]').click();
	}
}

Template.agentProfile.helpers({
	countAgentFollowings: function () {
	var agentinfo = Router.current().data().agent;
		var agentFollowing = agentinfo.following;
		if (agentFollowing == undefined){
			return 0;
		}else{
			var mycount = agentFollowing.length;
			return mycount;
		}


		//console.log(mycount);
		//return count;

	}
});

Template.myFeed.helpers({
	agentPlayerFeed: function () {
		//return "hello this is me";

		var agentId = Agents.findOne({owner: Meteor.userId()});
		//console.log(agentId);
		//return agentId;
		var agentOwner = agentId.owner;
		//console.log(agentOwner)
		var agentPlayerFollows = Players.find({followers: agentOwner}).fetch();
		return agentPlayerFollows;
		//console.log (agentPlayerFollows);
		//return agentPlayerFollows;
	},
	playerVideos: function () {
		var agentId = Meteor.userId();
		//console.log(agentId);
		//return agentId;
		var agentOwner = agentId.owner;
		//console.log(agentOwner)
		var playerObject = Players.findOne({followers: agentOwner});
		var playerId = playerObject._id;
		var playerVideos = UploadVideos.find({myId: playerId}).fetch();
		return playerVideos;
	}
});

//for the agent unboarding
Template.agentDetail2.helpers({
	anAgent: function() {
		var id = Meteor.userId();
		return Agents.findOne({ "owner": id });
	}
});


Template.agentDetail3.helpers({
	anAgent: function() {
		var id = Meteor.userId();
		return Agents.findOne({ "owner": id });
	}
});

Template.feedDetails.helpers({
	onePlayerFeed: function () {
		//return "hello this is me";

		var agentId = Agents.findOne({owner: Meteor.userId()});
		//console.log(agentId);
		//return agentId;
		var agentOwner = agentId.owner;
		//console.log(agentOwner)
		var agentPlayerFollows = Players.findOne({followers: agentOwner});
		return agentPlayerFollows;
		//console.log (agentPlayerFollows);
		//return agentPlayerFollows;
	},
	playerVideos: function () {
		var agentId = Agents.findOne({owner: Meteor.userId()});
		//console.log(agentId);
		//return agentId;
		var agentOwner = agentId.owner;
		//console.log(agentOwner)
		var playerObject = Players.findOne({followers: agentOwner});
		var playerId = playerObject._id;
		var playerVideos = UploadVideos.find({myId: playerId}).fetch();
		return playerVideos;
	}
});

//integrate this kento's code with the agentDetail1 template

//Code is for Player Profile image upload to S3
Template.agentDetail1.helpers({
	"files": function(){
		if (Session.get('fileExists')) {
			return S3.collection.find();
		};
	},
	'complete': function() {
		if (this.status == 'complete') {
			return true;
		};
	}
});
Template.updateAgentAndScoutDetail.helpers({
	"files": function(){
		if (Session.get('fileExists')) {
			return S3.collection.find();
		};
	},
	'complete': function() {
		if (this.status == 'complete') {
			return true;
		};

	},
	updateAgent: function() {
		var id = Meteor.userId();
		return Agents.findOne(Session.get("agentProfileId"));
	}
});
