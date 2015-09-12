AutoForm.hooks({
    insertAgentDetail: {
        // Called when any operation succeeds, where operation will be
        // "insert", "update", "submit", or the method name.
        onSuccess: function(operation, result, template) {
            //console.log("done");
            Router.go('agentProfile');
        }
    },
    updateAgent: {
        onSuccess: function(operation, result, template) {
            //console.log("updated");
            Router.go('agentProfile');
            //return sAlert.success('Nice, all done!', {timeout: '20000', onRouteClose: false, position: 'top-left'});

        },
        onError: function(operation, error, template) {
            //return sAlert.error(error);
        }
    }
});
