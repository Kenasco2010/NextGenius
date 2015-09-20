AutoForm.hooks({
    insertAgentDetail1:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail2');
            // console.log(result);
        },
        onError: function(formType, error) {
            console.log(error);
        },
    },
    insertAgentDetail2:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail3');
        }
    },
    insertAgentDetail3:{
        onSuccess: function(operation, result, template){
            Router.go('agentDetail4');
        }
    },
    updateAgentDetail: {
        onSuccess: function(operation, result, template) {
            //console.log("updated");
            Router.go('agentProfile');
            //return sAlert.success('Nice, all done!', {timeout: '20000', onRouteClose: false, position: 'top-left'});

        },
        onError: function(operation, error, template) {
            console.log(error);
        }
    }
});
