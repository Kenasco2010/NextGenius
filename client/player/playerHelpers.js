Template.playerProfile.events({
	'click #delete': function(){
	console.log("Im deleting")
	Players.remove(this._id);
	}
})

