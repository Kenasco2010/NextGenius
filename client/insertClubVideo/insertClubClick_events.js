
Template.uploadClubVideos.events({
    "change .upload-club-Videos-file_bag": function(event, template){
        sAlert.info('Please wait while we upload your video');
        //alert("helloooooo")
        var files = $("input.upload-club-Videos-file_bag")[0].files
        S3.upload({
            files:files,
            path:"clubVideos",
            unique_name: false,
            acl: "public-read"
        },function(error, success){
            if (error) {
                swal('we are sorry, something went wrong');
            }
            else {
                Session.set('fileExists', true);
                Session.set('absolutClubVideoUrl', success.url);
                Session.set('relativeClubVideoUrl', success.relative_url);
                Session.set('percent_uploaded', success.percent_uploaded);
                sAlert.success('You have successfully uploaded your video');


            }
        });
    },
    "click [data-action='remove-upload-club-video']": function() {
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
                    reset_form_element( $('.upload-club-Videos-file_bag') );
                    $("#imageThumbnail .myClubVideoControlClass").attr("src", "");
                    $('.club-video-thumbnail').hide();
                    $("[data-action='remove-upload-club-video']").hide();
                    $(".progress").remove();
                }
            });

    },
    //"click .publishClubVideoButton": function () {
    //    $(".progress").remove();
    //    $("#clubVideoDisplay").remove();
    //    $("#resetclubvideo").remove();
    //    $(".myClubVideoControlClass").remove();
    //    $(".resetClubVideo").remove();
    //}
});
reset_form_element = function(e) {
    e.wrap('<form>').parent('form').trigger('reset');
    e.unwrap();
};
