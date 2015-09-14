
AutoForm.hooks({
    insertClubDetail:{
        formToDoc: function(doc) {
            console.log(doc);
            return doc;
        },
        onSuccess: function(operation, result, template){
            Router.go('clubAndAcademyProfile')
        }
    },

    updateClubDetail:{
        onSuccess: function(operation ,result, template){
            Router.go('clubAndAcademyProfile');
        }
    }
});
