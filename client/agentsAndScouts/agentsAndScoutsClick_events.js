Template.agentProfile.events({
    "click #deleteClubAccount":function() {
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


Template.insertAgentAndScoutDetail.events({
    "change .agentPictureFile_bag": function(event, template){
        var files = $("input.agentPictureFile_bag")[0].files
        S3.upload({
            files:files,
            path:"Agents_And_Scouts_Images",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('agentAbsoluteImageUrl', success.url);
                Session.set('agentRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
            }
        });
    },
    "click [data-action='remove-agent-image']": function() {
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.agentPictureFile_bag') );
                    $("#imageThumbnail img").attr("src", "");
                    $('.img-thumbnail').hide();
                    $("[data-action='remove-agent-image']").hide();
                    $(".progress").remove();
                }
            });

    },
});

Template.updateAgentAndScoutDetail.events({
    "change .updateAgent-file_bag": function(event, template){
        var files = $("input.updateAgent-file_bag")[0].files
        S3.upload({
            files:files,
            path:"Agents_And_Scouts_Images",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('agentAbsoluteImageUrl', success.url);
                Session.set('agentRelativeImageUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
            }
        });
    },
    "click [data-action='remove-update-agent-image']": function(e, t) {
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.updateAgent-file_bag') );
                    $("#imageThumbnail img").attr("src", "");
                    $('.img-thumbnail').hide();
                    $("[data-action='remove-update-agent-image']").hide();
                    $(".progress").remove();
                }
            });
    }
});

reset_form_element = function(e) {
    e.wrap('<form>').parent('form').trigger('reset');
    e.unwrap();
};