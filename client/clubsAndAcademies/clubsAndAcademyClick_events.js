//Template.clubAndAcademyProfile.events({
//    'click .editClubProfile': function(e,t){
//        //alert("helloo you ")
//        Session.set('editclub', this._id)
//        //console.log(this._id)
//    }
//})

Template.clubAndAcademyProfile.events({
    "click #deleteClubAccount":function() {
        console.log("hellow click me la")
        Meteor.call('deleteAccount', Meteor.userId(), function (e) {
            if (!e) {
                alert("Next Genius is sad to see you go...")
                return Router.go('/')
            }
            else {
                return alert("Couldn't delete account");

            }
        });
    }
});

//Template.viewClubAndAcademyDetails.events({
//    "click .owner": function() {
//        //var owner = this._id
//        console.log(this.viewClubProfile.owner)
//    }
//
//});


Template.viewClubAndAcademyDetails.events({
    "click .followClubButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('insertClubFollowers', clubId, followers, function (e) {
            if (!e) {
                alert("you are following this club");
                //$('.followClubButton').attr('disabled', 'disabled');
                $('.followClubButton').hide();
                $('.unFollowClubButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('insertAgentFollowing', agentId, following, function(e){
            if (!e) {
                alert("data saved in agents");
                //$('.followPlayerButton').attr('disabled', 'disabled');
                $('.followClubButton').hide();
                $('.unFollowClubButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
    "click .unFollowClubButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('deleteClubFollowers', clubId, followers, function (e) {
            if (!e) {
                alert("you have unfollowed this club");
                //$('.unFollowClubButton').attr('disabled', 'disabled');
                $('.followClubButton').show();
                $('.unFollowClubButton').hide();
            }
            else {
                return alert("Couldn't follow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('deleteAgentFollowing', agentId, following, function(e){
            if (!e) {
                alert("data removed in agents");
                //$('.unFollowClubButton').attr('disabled', 'disabled');
                $('.followClubButton').show();
                $('.unFollowClubButton').hide();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
});


Template.insertClubsAndAcademy.events({
    "change .clubPictureFile_bag": function(event, template){
        var files = $("input.clubPictureFile_bag")[0].files
        S3.upload({
            files:files,
            path:"ClubImages",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('clubAbsoluteImageUrl', success.url);
                Session.set('clubRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
            }
        });
    },
    "click [data-action='remove-club-image']": function() {
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.clubPictureFile_bag') );
                    $("#imageThumbnail img").attr("src", "");
                    $('.img-thumbnail').hide();
                    $("[data-action='remove-club-image']").hide();
                    $(".progress").remove();
                }
            });

    },
});

Template.updateClubAndAcademy.events({
    "change .updateClub-file_bag": function(event, template){
        var files = $("input.updateClub-file_bag")[0].files
        S3.upload({
            files:files,
            path:"ClubImages",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('clubAbsoluteImageUrl', success.url);
                Session.set('clubRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
            }
        });
    },
    "click [data-action='remove-image']": function(e, t) {
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.updateClub-file_bag') );
                    $("#imageThumbnail img").attr("src", "");
                    $('.img-thumbnail').hide();
                    $("[data-action='remove-image']").hide();
                    $(".progress").remove();
                }
            });
    }
});

reset_form_element = function(e) {
    e.wrap('<form>').parent('form').trigger('reset');
    e.unwrap();
};