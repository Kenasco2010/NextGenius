
Template.uploadPlayerVideos.events({
    "change .upload-Player-Videos-file_bag": function(event, template){
        sAlert.info('Please wait while we upload your video');
        //alert("helloooooo")
        var files = $("input.upload-Player-Videos-file_bag")[0].files
        S3.upload({
            files:files,
            path:"playerVideos",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('absolutePlayerVideoUrl', success.url);
                Session.set('relativePlayerVideoUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
                sAlert.success('You have successfully uploaded your video');


            }
        });
    },
    "click [data-action='remove-upload-players-video']": function() {
        sAlert.warning('You have removed your video');
        var relative_url = this.relative_url;
        S3.delete(
            relative_url,
            function(error, success) {
                if (error) {
                    console.log(error);
                }
                else {
                    this.status = 'removed';
                    reset_form_element( $('.upload-Player-Videos-file_bag') );
                    $("#imageThumbnail .myvideocontrolclass").attr("src", "");
                    $('.video-thumbnail').hide();
                    $("[data-action='remove-upload-players-video']").hide();
                    $(".progress").remove();
                }
            });

    },
    "click .publishPlayerVideoButton": function () {
        $(".progress").remove();
        $("#playerVideoDisplay").remove();
        $("#resetplayervideo").remove();
        $(".myvideocontrolclass").remove();
        $(".resetPlayerVideo").remove();
    }
});
reset_form_element = function(e) {
    e.wrap('<form>').parent('form').trigger('reset');
    e.unwrap();
};
