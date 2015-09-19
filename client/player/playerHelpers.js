Template.updatePlayerProfile.helpers({
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
            if (confirm('Do you really want to delete "' + doc.firstName + '"?')) {
                this.remove();
            }
        };
    }
});

Template.updatePlayerProfile.helpers({
    updateDoc: function(){
        return Players.findOne();
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
console.log("the date is" + date);

$(".btn-default").attr('id', 'registerClubbtn');
}