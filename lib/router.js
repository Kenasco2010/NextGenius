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

Router.route('/playerdetail', function(){
	this.render("insertPlayerDetail");
},{
	name: "enterplayerdetail"
})