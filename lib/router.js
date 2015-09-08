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

Router.route('/playerform', function(){
	this.render("playerform");
},{
	name: "playerForm"
})

Router.route('/playerprofile', function(){
	this.render("playerprofile");
},{
	name: "playerProfile",
    data: function(){
        // var _id = this.params._id
        return {
            playerprofile: Players.find().fetch()
        }
    }
})