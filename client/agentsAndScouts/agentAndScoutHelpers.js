Template.updateAgentAndScoutDetail.helpers({
	updateAgent: function() {
		var id = Meteor.userId();
		return Agents.findOne({ "owner": id });
	}
});


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
		return this.following.length;
	}
});

Template.myFeed.helpers({
	playerFeed: function () {
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
	}
});
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
