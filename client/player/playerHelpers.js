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

    updateDoc: function(){
        return Players.findOne({ "owner": id });
    }
});

Template.playerDetail2.helpers({
    aPlayer: function() {
        var id = Meteor.userId();
        return Players.findOne({ "owner": id });
    }
});

Template.playerDetail3.helpers({
    aPlayer: function() {
        var id = Meteor.userId();
        return Players.findOne({ "owner": id });
    }
});

Template.viewPlayerDetails.helpers({
    countPlayerFollowers: function () {
        return this.followers.length;
    }
});




Template.playerDetail1.rendered = function() {
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

var date = $('#datepicker').html();
//console.log("the date is" + date);

$(".btn-default").attr('id', 'registerClubbtn');
}


Template.updatePlayerProfile.rendered = function () {
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

//
Template.viewPlayerDetails.rendered = function () {
    var agentId = Meteor.userId();
    var currentPlayer = Router.current().data().viewPlayerProfile;
    var followPlayerId = Players.findOne({followers: agentId});
    var playerFollowers;
    if (followPlayerId && followPlayerId.followers) {
        playerFollowers = followPlayerId.followers;
    }
    var connection = _.contains(currentPlayer.followers, agentId);
    console.log(connection);
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
Template.playerDetail1.helpers({
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
