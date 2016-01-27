
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

Template.insertClubsAndAcademy1.rendered = function () {
$(".progress").remove();
$(".resetclubimage").remove();
$("#imageThumbnail").remove();
};

Template.updateClubAndAcademy.helpers({
    doc: function(){
        return Clubs.findOne(Session.get("clubId"));
    }
});



Template.insertClubsAndAcademy2.helpers({
    aClub: function() {
        var id = Meteor.userId();
        return Agents.findOne({ "owner": id });
    }
});


Template.insertClubsAndAcademy3.helpers({
    aClub: function() {
        var id = Meteor.userId();
        return Agents.findOne({ "owner": id });
    }
});


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
        var currentClub = Router.current().data().viewClubProfile
        var clubFollowers = currentClub.followers;
        if (clubFollowers == undefined){
            return 0;
        }else {
            var clubCount = clubFollowers.length;
            return clubCount;
        }
      //return this.followers.length;
  },
    ownDoc: function () {
        if (this.owner === Meteor.userId()) {
            $(".unFollowClubButton").hide();
            $(".followClubButton").hide();
        }
    }
});

Template.viewClubAndAcademyDetails.rendered = function () {
        var agentId = Meteor.userId();
        var currentClub = Router.current().data().viewClubProfile;
        var followClubId = Clubs.findOne({followers: agentId});
        var ClubFollowers;
        if (followClubId && followClubId.followers) {
            ClubFollowers = followClubId.followers;
        }
        var connection = _.contains(currentClub.followers, agentId);
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

//Code is for Club Profile image upload to S3
Template.insertClubsAndAcademy1.helpers({
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
Template.updateClubAndAcademy.helpers({
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
Template.insertClubsAndAcademy1.rendered = function () {
   if (!window.allScriptsLoaded) {
    var scripts = [
      // list of JS files to be loaded.
      'js/script.js'
      ];

      function loadNext() {
        var src = scripts.shift();
        if (typeof src === 'undefined')
          return;

      var s = document.createElement("script");

      s.setAttribute('src', src);
      if (s.addEventListener) {
          s.addEventListener("load", loadNext, false);
      } else if (s.readyState) {
          s.onreadystatechange = loadNext;
      }
      document.body.appendChild(s);
  };

  loadNext();
  window.allScriptsLoaded = true;
};


$(".btn-default").attr('id', 'registerClubbtn');
};

