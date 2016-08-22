Framer module that allows to get json objects when querying with Spotify API
insert module writing code in framer app

```
spotify = require "spotify"
```

you can search for specific artist or song using this function

```
spotify.searchAlbums(query)
#for example
spotify.searchAlbums("dj khaled)
```

after query is done, you can get this object from module

```
albums=spotify.albums
```
which will give u json of all found albums

for example you can get url of specific album cover image
```
print spotify.albums.items[0].images[0].url
```
in order to find track for specific albums, you can run function

```
spotify.fetchTracks(spotify.albums.items[0].id)
#as result u can get tracks json object
tracks=spotify.tracks
```

you can get more info on specific track from album just grabbing parts of json

```
print tracks[0].artists[0].name, tracks[0].name, tracks[0].preview_url
```


basic framer sample
http://share.framerjs.com/fl0ajjn4tyt4/



advanced  sample - spotify player on android
![spotify framer player](https://github.com/mamezito/spotifyApiFramer/blob/master/spotifyPlaylist.gif)
http://share.framerjs.com/3yjdfuufi56q/


with two objects spotify.tracks and spotify.albums - you will get big json objects wich you can use for other cases also
more info on spotify web api - https://developer.spotify.com/web-api/
