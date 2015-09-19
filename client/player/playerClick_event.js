
Template.playerProfile.events({
    "click #deletePlayerAccount":function() {
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

//Template.viewPlayerDetails.events({
//    "click .followButton": function () {
//        alert("You are following me. Thanx")
//    }
//});

Template.viewPlayerDetails.events({
    "click .followPlayerButton": function () {
        var followers = Meteor.userId();
        var playerId = this._id;
        Meteor.call('insertPlayerFollowers', playerId, followers, function (e) {
            if (!e) {
                //alert("data saved in players");
                sAlert.success('you have following this player');

                $('.followPlayerButton').hide();
                $('.unFollowPlayerButton').show();

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
                //alert("data saved in agents");
                $('.followPlayerButton').hide();
                $('.unFollowPlayerButton').show();
            }
            else {
                return alert("Couldn't follow this player");

            }
        })
    },
    "click .unFollowPlayerButton": function () {
        var followers = Meteor.userId();
        var clubId = this._id;
        Meteor.call('deletePlayerFollowers', clubId, followers, function (e) {
            if (!e) {
                //alert("you have unfollowed this player");
                sAlert.warning('you have unfollowed this player');

                $('.followPlayerButton').show();
                $('.unFollowPlayerButton').hide();

            }
            else {
                return alert("Couldn't unfollow this player");

            }
            //console.log(myId.count())
        });
        var following = this._id;
        var agentId = Agents.findOne({owner:Meteor.userId()})._id;

        Meteor.call('deleteAgentFollowing', agentId, following, function(e){
            if (!e) {
                //alert("data removed in agents");
                $('.followPlayerButton').show();
                $('.unFollowPlayerButton').hide();


            }
            else {
                return alert("Couldn't delete data from agent");

            }
        })
    },
});

Template.insertPlayerDetail.events({
    "change .playerPictureFile_bag": function(event, template){
        sAlert.info('Please wait while we upload your profile picture');
        var files = $("input.playerPictureFile_bag")[0].files
        S3.upload({
            files:files,
            path:"PlayerImages",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('playerAbsoluteImageUrl', success.url);
                Session.set('playerRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
                sAlert.success('You have successfully uploaded your profile picture');


            }
        });
    },
    "click [data-action='remove-player-image']": function() {
        sAlert.warning('You have removed the profile picture');
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.playerPictureFile_bag') );
                    $("#imageThumbnail img").attr("src", "");
                    $('.img-thumbnail').hide();
                    $("[data-action='remove-player-image']").hide();
                    $(".progress").remove();
                }
            });

    },
});

Template.updatePlayerProfile.events({
    "change .updatePlayer-file_bag": function(event, template){
        $('.displayPlayerProfilePicture').hide();
        sAlert.info('Please wait while we update your profile picture');
        var files = $("input.updatePlayer-file_bag")[0].files
        S3.upload({
            files:files,
            path:"PlayerImages",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('playerAbsoluteImageUrl', success.url);
                Session.set('playerRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
                sAlert.success('You have successfully Updated your profile picture');

            }
        });
    },
    "click [data-action='remove-image']": function(e, t) {
        sAlert.warning('You have removed the profile picture');
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.updatePlayer-file_bag') );
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