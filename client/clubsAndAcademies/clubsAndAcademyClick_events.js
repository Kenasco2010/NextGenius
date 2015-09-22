Template.clubAndAcademyProfile.events({
    "click #deleteClubAccount":function() {
        //console.log("hellow click me la")
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

Template.viewClubAndAcademyDetails.events({
    "click .followClubButton": function () {
        var agentId = Meteor.userId();
        var clubId = this._id;
        Meteor.call('insertClubFollowers', clubId, agentId, function (e) {
            if (!e) {
                //alert("you are following this club");
                sAlert.success('you are following this club');

                //$('.followClubButton').attr('disabled', 'disabled');
                $('.followClubButton').hide();
                $('.unFollowClubButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
            //console.log(myId.count())
        });
        //var following = this._id;
        //var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('insertClubAgentFollowing', agentId, clubId, function(e){
            if (!e) {
                //alert("data saved in agents");
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
                //alert("you have unfollowed this club");
                sAlert.warning('you have unfollowed this club');

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
                //alert("data removed in agents");
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


Template.insertClubsAndAcademy1.events({
    "change .clubPictureFile_bag": function(event, template){
        var files = $("input.clubPictureFile_bag")[0].files
        sAlert.info('Please wait while we upload your club profile picture');
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
                sAlert.success('You have successfully uploaded you club profile picture');
            }
        });
    },
    "click [data-action='remove-club-image']": function() {
        sAlert.warning('You have removed the club profile picture');
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
        $('.displayClubProfilePicture').hide();

        sAlert.info('Please wait while we update your club profile picture');


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
                sAlert.success('You have successfully updated you club profile picture');

            }
        });
    },
    "click [data-action='remove-image']": function(e, t) {
        sAlert.warning('You have removed the club profile picture');
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