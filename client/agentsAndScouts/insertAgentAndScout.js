AutoForm.hooks({
	insertAgentDetail: {
    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
    	console.log("done")
    	// FlashMessages.sendSuccess('Nice, all done!');
    	Router.go('/agent-profile/:_id');
    }

}
});