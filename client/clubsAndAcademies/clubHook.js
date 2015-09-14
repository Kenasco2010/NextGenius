
AutoForm.hooks({
    insertClubDetail:{
        onSuccess: function(operation, result, template){
            Router.go('clubAndAcademyProfile')
        }
    },

    updatePlayerDetail:{
        onSuccess: function(operation ,result, template){
            Router.go('clubAndAcademyProfile');
        }
    }
});
