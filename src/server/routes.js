const routes = require('express').Router();
var request = require('request');

routes.post('/videos', function(req, res) {
  request.get(
    'https://www.googleapis.com/youtube/v3/search?' +
    'key=' + process.env.YOUTUBE_API_KEY +
    '&q=' + req.body.data +
    '&type=video&chart=relavence&part=snippet,id&maxResults=20',
    function(e, r, data) {
      res.send(data)
    })
})

routes.post('/comments', function(req, res) {
  request.get(
    'https://www.googleapis.com/youtube/v3/commentThreads?' +
    'key=' + process.env.YOUTUBE_API_KEY +
    '&videoId=' + req.body.data +
    '&part=snippet,replies',
    function(e, r, data) {
      res.send(data)
    })
})

routes.post('/relatedvideos', function(req, res) {
  request.get('https://www.googleapis.com/youtube/v3/search?' +
    'part=snippet&type=video&maxResults=20' +
    '&relatedToVideoId=' + req.body.data +
    '&key=' + process.env.YOUTUBE_API_KEY,
    function(e, r, data) {
      res.send(data)
    })
})

routes.get('/trending', function(req, res) {
  request.get('https://www.googleapis.com/youtube/v3/videos?' +
    'part=snippet&chart=mostPopular&maxResults=10' +
    '&key=' + process.env.YOUTUBE_API_KEY,
    function(e, r, data) {
      res.send(data)
    })
})

module.exports = routes;
