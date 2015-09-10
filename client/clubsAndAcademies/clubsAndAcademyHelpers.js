
Template.clubAndAcademyProfile.helpers({
    isOwner: function() {
        return this.owner === Meteor.userId();
    },
    onError: function () {
        return function (error) { alert("Sorry! This operation was not successful"); console.log(error); };
    },
    onSuccess: function () {
        return function (result) { alert("You have successfully deleted this record"); console.log(result); };
    },
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Do you really want to delete "' + doc.clubName + '"?')) {
                this.remove();
            }
        };
    }
});

Template.updateClubAndAcademy.helpers({
    doc: function(){
        return Clubs.findOne();
    }
});

