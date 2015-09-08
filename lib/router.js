Router.configure({
    layoutTemplate: "masterLayout",
    notFoundTemplate: "404"
});

Router.route('/sign-up', function () {
        this.render("signUp");
    },
    {
        name: "signUp"
    });

Router.route('/insert-player-detail', function(){
	this.render("insertPlayerDetail");
},{

	name: "insertPlayerDetail"
})

Router.route('/player-profile', function(){
	this.render("playerProfile");
},{
	name: "playerProfile",
    data: function(){
        // var _id = this.params._id
        return {
            playerProfile: Players.find().fetch()
        }
    }
})

Router.route('/signout', function(){
        this.render('signIn')
    },
    {
        name: 'signout',
        data: function(){
            return Meteor.logout();

        }
    });
