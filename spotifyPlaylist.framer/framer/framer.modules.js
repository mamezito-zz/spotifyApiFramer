require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"spotify":[function(require,module,exports){
exports.searchAlbums = function(query) {
  var album, bla, qString, r;
  bla = 8;
  r = new XMLHttpRequest;
  qString = "?q=" + encodeURIComponent(query) + "&type=album";
  r.open('GET', 'https://api.spotify.com/v1/search' + qString, false);
  r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  album = [];
  r.onreadystatechange = function() {
    var response;
    if (r.readyState !== 4 || r.status !== 200) {
      return;
    }
    response = JSON.parse(r.responseText);
    return exports.albums = response.albums;
  };
  return r.send();
};

exports.fetchTracks = function(albumId) {
  var r;
  r = new XMLHttpRequest;
  r.open('GET', 'https://api.spotify.com/v1/albums/' + albumId, false);
  r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  r.onreadystatechange = function() {
    var response;
    if (r.readyState !== 4 || r.status !== 200) {
      return;
    }
    response = JSON.parse(r.responseText);
    return exports.tracks = response.tracks.items;
  };
  return r.send();
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvd29yay9mcmFtZXIvbXkvc3BvdGlmeS9zcG90aWZ5UGxheWxpc3QuZnJhbWVyL21vZHVsZXMvc3BvdGlmeS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNPQSxPQUFPLENBQUMsWUFBUixHQUF1QixTQUFDLEtBQUQ7QUFDdEIsTUFBQTtFQUFBLEdBQUEsR0FBSTtFQUNKLENBQUEsR0FBSSxJQUFJO0VBQ1IsT0FBQSxHQUFVLEtBQUEsR0FBUSxrQkFBQSxDQUFtQixLQUFuQixDQUFSLEdBQW9DO0VBQzlDLENBQUMsQ0FBQyxJQUFGLENBQU8sS0FBUCxFQUFjLG1DQUFBLEdBQXNDLE9BQXBELEVBQTZELEtBQTdEO0VBQ0EsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLGNBQW5CLEVBQW1DLGtEQUFuQztFQUNBLEtBQUEsR0FBTTtFQUNOLENBQUMsQ0FBQyxrQkFBRixHQUF1QixTQUFBO0FBQ3RCLFFBQUE7SUFBQSxJQUFHLENBQUMsQ0FBQyxVQUFGLEtBQWdCLENBQWhCLElBQXFCLENBQUMsQ0FBQyxNQUFGLEtBQVksR0FBcEM7QUFDQyxhQUREOztJQUVBLFFBQUEsR0FBVyxJQUFJLENBQUMsS0FBTCxDQUFXLENBQUMsQ0FBQyxZQUFiO1dBQ1gsT0FBTyxDQUFDLE1BQVIsR0FBaUIsUUFBUSxDQUFDO0VBSko7U0FhdkIsQ0FBQyxDQUFDLElBQUYsQ0FBQTtBQXBCc0I7O0FBMkJ2QixPQUFPLENBQUMsV0FBUixHQUFzQixTQUFDLE9BQUQ7QUFDckIsTUFBQTtFQUFBLENBQUEsR0FBSSxJQUFJO0VBQ1IsQ0FBQyxDQUFDLElBQUYsQ0FBTyxLQUFQLEVBQWMsb0NBQUEsR0FBdUMsT0FBckQsRUFBOEQsS0FBOUQ7RUFDQSxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsY0FBbkIsRUFBbUMsa0RBQW5DO0VBQ0EsQ0FBQyxDQUFDLGtCQUFGLEdBQXVCLFNBQUE7QUFDdEIsUUFBQTtJQUFBLElBQUcsQ0FBQyxDQUFDLFVBQUYsS0FBZ0IsQ0FBaEIsSUFBcUIsQ0FBQyxDQUFDLE1BQUYsS0FBWSxHQUFwQztBQUNDLGFBREQ7O0lBRUEsUUFBQSxHQUFXLElBQUksQ0FBQyxLQUFMLENBQVcsQ0FBQyxDQUFDLFlBQWI7V0FDWCxPQUFPLENBQUMsTUFBUixHQUFpQixRQUFRLENBQUMsTUFBTSxDQUFDO0VBSlg7U0FTdkIsQ0FBQyxDQUFDLElBQUYsQ0FBQTtBQWJxQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5cbiNzcG90aWZ5IEFQSVxuIyB0aGlzIGZpbmRzIG91ciBhbGJ1bXNcbmV4cG9ydHMuc2VhcmNoQWxidW1zID0gKHF1ZXJ5KSAtPlxuXHRibGE9OFxuXHRyID0gbmV3IFhNTEh0dHBSZXF1ZXN0XG5cdHFTdHJpbmcgPSBcIj9xPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSArIFwiJnR5cGU9YWxidW1cIlxuXHRyLm9wZW4gJ0dFVCcsICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9zZWFyY2gnICsgcVN0cmluZywgZmFsc2Vcblx0ci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XG5cdGFsYnVtPVtdXG5cdHIub25yZWFkeXN0YXRlY2hhbmdlID0gLT5cblx0XHRpZiByLnJlYWR5U3RhdGUgIT0gNCBvciByLnN0YXR1cyAhPSAyMDBcblx0XHRcdHJldHVyblxuXHRcdHJlc3BvbnNlID0gSlNPTi5wYXJzZShyLnJlc3BvbnNlVGV4dClcblx0XHRleHBvcnRzLmFsYnVtcyA9IHJlc3BvbnNlLmFsYnVtc1xuXHRcdCMgYWxidW1Db3Zlcj1maXJzdE1hdGNoLmltYWdlc1swXS51cmxcblx0XHQjIGFsYnVtTmFtZT1maXJzdE1hdGNoLm5hbWVcblx0XHQjIGV4cG9ydHMuYWxidW09W25hbWU6YWxidW1OYW1lLGNvdmVyOmFsYnVtQ292ZXIsIGFsYnVtSUQ6Zmlyc3RNYXRjaC5pZF1cblx0XHQjXG5cdFx0IyBpZiBmaXJzdE1hdGNoXG5cdFx0IyBcdGZldGNoVHJhY2tzKGZpcnN0TWF0Y2guaWQpXG5cblx0IyBwcmludCBleHBhbGJ1bVxuXHRyLnNlbmQoKVxuXG5cblxuXG5cbiMgdGhpcyBnZXRzIGEgc3BlY2lmaWMgdHJhY2tcbmV4cG9ydHMuZmV0Y2hUcmFja3MgPSAoYWxidW1JZCkgLT5cblx0ciA9IG5ldyBYTUxIdHRwUmVxdWVzdFxuXHRyLm9wZW4gJ0dFVCcsICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9hbGJ1bXMvJyArIGFsYnVtSWQsIGZhbHNlXG5cdHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xuXHRyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IC0+XG5cdFx0aWYgci5yZWFkeVN0YXRlICE9IDQgb3Igci5zdGF0dXMgIT0gMjAwXG5cdFx0XHRyZXR1cm5cblx0XHRyZXNwb25zZSA9IEpTT04ucGFyc2Uoci5yZXNwb25zZVRleHQpXG5cdFx0ZXhwb3J0cy50cmFja3MgPSByZXNwb25zZS50cmFja3MuaXRlbXNcblx0XHQjIHByaW50IHRyYWNrc1xuXHRcdCMgbXVzaWMudmlkZW8gPSB0cmFjay5wcmV2aWV3X3VybFxuXHRcdCMgYXJ0aXN0Lmh0bWwgPSB0cmFjay5hcnRpc3RzWzBdLm5hbWVcblxuXHRyLnNlbmQoKVxuIl19
