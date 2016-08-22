# Add the following line to your project in Framer Studio.
# myModule = require "myModule"
# Reference the contents by name, like myModule.myFunction() or myModule.myVar


#spotify API
# this finds our albums
exports.searchAlbums = (query) ->
	bla=8
	r = new XMLHttpRequest
	qString = "?q=" + encodeURIComponent(query) + "&type=album"
	r.open 'GET', 'https://api.spotify.com/v1/search' + qString, false
	r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	album=[]
	r.onreadystatechange = ->
		if r.readyState != 4 or r.status != 200
			return
		response = JSON.parse(r.responseText)
		exports.albums = response.albums
		# albumCover=firstMatch.images[0].url
		# albumName=firstMatch.name
		# exports.album=[name:albumName,cover:albumCover, albumID:firstMatch.id]
		#
		# if firstMatch
		# 	fetchTracks(firstMatch.id)

	# print expalbum
	r.send()





# this gets a specific track
exports.fetchTracks = (albumId) ->
	r = new XMLHttpRequest
	r.open 'GET', 'https://api.spotify.com/v1/albums/' + albumId, false
	r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	r.onreadystatechange = ->
		if r.readyState != 4 or r.status != 200
			return
		response = JSON.parse(r.responseText)
		exports.tracks = response.tracks.items
		# print tracks
		# music.video = track.preview_url
		# artist.html = track.artists[0].name

	r.send()
