
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