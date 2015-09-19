
Template.updateAgentAndScoutDetail.helpers({
	updateAgent: function() {
		var id = Meteor.userId();
		return Agents.findOne({ "owner": id });
	}
});

Template.insertAgentAndScoutDetail.rendered = function () {
	//Initialize tooltips
	// $('.nav-tabs > li a[title]').tooltip();

	//Wizard
	$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

		var $target = $(e.target);

		if ($target.parent().hasClass('disabled')) {
			return false;
		}
	});

	$(".next-step").click(function (e) {

		var $active = $('.wizard .nav-tabs li.active');
		$active.next().removeClass('disabled');
		nextTab($active);

	});
	$(".prev-step").click(function (e) {

		var $active = $('.wizard .nav-tabs li.active');
		prevTab($active);

	});
}

function nextTab(elem) {
	$(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
	$(elem).prev().find('a[data-toggle="tab"]').click();
}

Template.agentProfile.helpers({
	countAgentFollowings: function () {
		return this.following.length;
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

//Code is for Player Profile image upload to S3
Template.insertAgentAndScoutDetail.helpers({
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
	}
});