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