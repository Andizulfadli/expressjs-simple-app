var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];
  
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArtwork = myArtwork.concat(item.artwork);
  });

  res.render('index', { 
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    page: 'home'
  });
});

/* GET speakers page. */
router.get('/speakers', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];
  
  myArtists = appdata.speakers;
  appdata.speakers.forEach(function(item){
    myArtwork = myArtwork.concat(item.artwork);
  });

  res.render('index', { 
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistList'
  });
});

router.get('/speakers/:speakerid', function(req, res, next) {
  var myArtwork = [];
  var myArtists = [];  
  var selectedSpeaker = null;

  appdata.speakers.forEach(function(item){
    // hanya menampilkan artwork untuk artist tertentu saja
    if(item.shortname == req.params.speakerid){
      myArtwork = myArtwork.concat(item.artwork); 
      myArtists.push(item);
      selectedSpeaker = item.name;
    }
  });

  res.render('speakers', { 
    title: 'Speakers Detail: ' + selectedSpeaker,
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});

module.exports = router;
