
AutoForm.hooks({
    insertClubDetail:{
        onSuccess: function(operation, result, template){
            Router.go('allClubAndAcademy')
        }
    },

    updatePlayerDetail:{
        onSuccess: function(operation ,result, template){
            Router.go('/');
        }
    }
});
