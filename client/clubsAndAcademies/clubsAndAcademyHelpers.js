
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


Template.insertClubsAndAcademy.rendered = function () {
    //Initialize tooltips
    // $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

};

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

//Template.myFavoriteButtonFavorited.replaces("favoriteButtonFavorited");
//
//Template.myFavoriteButtonNotFavorited.replaces("favoriteButtonNotFavorited");


//Template.clubAndAcademyProfile.rendered = function () {
//    $('a[class="favorite-button"]').text("Follow");
//}
Template.viewClubAndAcademyDetails.helpers({
    videoOwner: function () {
        return UploadVideos.find({});
        //var owner = this._id
        //console.log(this.viewClubProfile.owner)
    },
    countClubFollowers: function () {
      return this.followers.length;
    }

});

Template.viewClubAndAcademyDetails.rendered = function () {
        //console.log(Agents.findOne({owner:Meteor.userId()})._id == Players.findOne({owner: Meteor.userId()}).followers)
        var agentId = Agents.findOne({owner: Meteor.userId()});
        var agentOwner = agentId.owner;
        //var agentFollowing = agentId.following;
        var followClubId = Clubs.findOne({followers: agentId.owner});
        //console.log(followClubId);
        var ClubFollowers;
        if (followClubId && followClubId.followers) {
            ClubFollowers = followClubId.followers;
        }
        var connection = _.contains(ClubFollowers, agentOwner);
        //console.log(connection);
        if (connection) {
            //console.log("inside if loop");
            $('.followClubButton').hide();
            $('.unFollowClubButton').show();
        }
        else {
            //console.log("inside else loop");
            $('.followClubButton').show();
            $('.unFollowClubButton').hide();
        }

    };

