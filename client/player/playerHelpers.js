Template.updatePlayerProfile.helpers({
    isOwner: function () {
        return this.owner === Meteor.userId();
    },
    onError: function () {
        return function (error) {
            alert("Sorry! This operation was not successful");
            console.log(error);
        };
    },
    onSuccess: function () {
        return function (result) {
            alert("You have successfully deleted this record");
            console.log(result);
        };
    },
    beforeRemove: function () {
        return function (collection, id) {
            var doc = collection.findOne(id);
            if (confirm('Do you really want to delete "' + doc.firstName + '"?')) {
                this.remove();
            }
        };
    }
});

Template.updatePlayerProfile.helpers({
    updateDoc: function () {
        return Players.findOne();
    }
});
Template.viewPlayerDetails.helpers({
    countPlayerFollowers: function () {
    return this.followers.length;
}
})

Template.insertPlayerDetail.rendered = function() {
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
        console.log("inside");

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


//Template.insertPlayerDetail.rendered=function() {
//    $('.my-datepicker').datepicker();
//}

Template.viewPlayerDetails.rendered = function () {
    //console.log(Agents.findOne({owner:Meteor.userId()})._id == Players.findOne({owner: Meteor.userId()}).followers)
    var agentId = Agents.findOne({owner: Meteor.userId()});
    var agentOwner = agentId.owner;
    //var agentFollowing = agentId.following;
    var followPlayerId = Players.findOne({followers: agentId.owner});
    //console.log(followPlayerId);
    var playerFollowers;
    if (followPlayerId && followPlayerId.followers) {
        playerFollowers = followPlayerId.followers;
    }
    var connection = _.contains(playerFollowers, agentOwner);
    //console.log(connection);
    if (connection) {
        //console.log("inside if loop");
        $('.followPlayerButton').hide();
        $('.unFollowPlayerButton').show();
    }
    else {
        //console.log("inside else loop");
        $('.followPlayerButton').show();
        $('.unFollowPlayerButton').hide();
    }

};

//Code is for Player Profile image upload to S3
Template.insertPlayerDetail.helpers({
    "files": function(){
        if (Session.get('fileExists')) {
            return S3.collection.find();
        };
    },
    'complete': function() {
        if (this.status == 'complete') {
            return true;
        };
    }
});
Template.updatePlayerProfile.helpers({
    "files": function(){
        if (Session.get('fileExists')) {
            return S3.collection.find();
        };
    },
    'complete': function() {
        if (this.status == 'complete') {
            return true;
        };
    }
});