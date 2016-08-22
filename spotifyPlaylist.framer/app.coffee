# Sharing Info
# This info is presented in a widget when you share

Framer.Info =
	title: "spotify android player"
	description: "spotify module showcase, you can play song, switch to next/previous song, pause song"
	author: "Sergey Voronov"
	twitter: "mamezito"

#module
spotify = require "spotify"

#interface
sketch = Framer.Importer.load("imported/spotifyFramer@3x")


backgroundsHolder = new Layer
	width:Screen.width
	height:Screen.height
	backgroundColor: "null"
	


#page elements for album covers
pager=new PageComponent
	x:135
	width: Screen.width-270
	height:810
	y:240
	scrollVertical: false
	clip: false

sketch.next.states.add
	inactive:
		opacity:0
sketch.previous.states.add
	inactive:
		opacity:0	
	
sketch.previous.states.switchInstant("inactive")
sketch.pause.opacity=0


#variables
current=0
	
#setting up playlist from artists
artists=["prodigy","chemical brothers","roni size","herbaliser","coldcut","the wiseguys","orbital","underworld"]

#creating placeholder arrays
albums=[]
covers=[]
backgrounds=[]	
songs=[]

#creating album covers, and arrays of song information using spotify api
for artist,i in artists
	backgroundCover = new Layer
		width:Screen.width
		height:Screen.height
		backgroundColor: "null"
		blur: 150
		opacity:0.4
		opacity:0
		parent:backgroundsHolder
	backgrounds.push(backgroundCover)
	cover=new Layer
		width:810
		height:810
		backgroundColor: "white"
		x:810*i
		parent:pager.content
		scale:0.85
	#searching for albums based on artist from array
	spotify.searchAlbums(artist)
	# asigning cover image of first album to cover layer
	cover.image=spotify.albums.items[0].images[0].url
	backgroundCover.image=spotify.albums.items[0].images[0].url
	covers.push(cover)
	albums.push(spotify.albums.items[0].id)
	#getting tracks from the album id
	spotify.fetchTracks(spotify.albums.items[0].id)
	#creating song object for the first track in the album
	song=spotify.tracks[0]
	songs.push(song)
	
covers[0].scale=1		
backgrounds[0].opacity=0.4


#switching active cover and blured background
pager.content.on "change:x", ->	
	for child,i  in covers
		if child.screenFrame.x<Screen.width/2
			child.scale=Utils.modulate(child.screenFrame.x+child.width/2, [200,Screen.width/2], [0.85,1], true)
			backgrounds[i].opacity=Utils.modulate(child.screenFrame.x+child.width/2, [200,Screen.width/2], [0,0.4], true)

		else
			child.scale=Utils.modulate(child.screenFrame.x+child.width/2, [Screen.width/2,Screen.width], [1,0.85], true)
			backgrounds[i].opacity=Utils.modulate(child.screenFrame.x+child.width/2, [Screen.width/2,Screen.width], [0.4,0], true)

# using a hidden video layer to play the music
music = new VideoLayer width: 0, height: 0

#song metadata

currentTime=new Layer x:13*3, y:423*3, backgroundColor:"null", width:100, opacity:0.75
songTime=new Layer x:315*3, y:423*3, backgroundColor:"null", width:100, opacity:0.75
songTime.style = 
	color: "white"
	textAlign:"center"
	fontSize: "36px"
	fontFamily: "Roboto"
currentTime.style = 
	color: "white"
	textAlign:"center"
	fontSize: "36px"
	fontFamily: "Roboto"
stopMusic = false
playing = false

slider=new SliderComponent x:Align.center, y:428*3, width:237*3, backgroundColor: "rgba(252,255,255,0.25)", height:3

slider.fill.backgroundColor = "#fff"

songName = new Layer width: 710, height: 120, x: Align.center, y: 365*3, backgroundColor: "transparent"
songName.style = 
	color: "white"
	textAlign:"center"
	fontSize: "48px"
	fontWeight:"500"
	fontFamily: "Roboto"
	whiteSpace: "nowrap"
	textOverflow: "ellipsis"


artist = new Layer width: 710, height: 100, x: Align.center, y: 387*3, backgroundColor: "transparent"
artist.style = 
	color: "#BEBEBE"
	textAlign:"center"
	fontSize: "42px"
	fontFamily: "Roboto"
	whiteSpace: "nowrap"
	textOverflow: "ellipsis"

# play, pause, previous, next functions
playSong=()->
	playing = true
	stopMusic = false
	music.player.play()
	sketch.pause.opacity=1
	sketch.play.opacity=0
	sketch.pause.bringToFront()
	
pauseSong=()->
	sketch.pause.opacity=0
	sketch.play.opacity=1
	playing = false
	music.player.pause()
	stopMusic = true
	sketch.play.bringToFront()
	
# set up our events
sketch.play.onClick ->
	playSong()

sketch.pause.onClick ->
	pauseSong()
sketch.next.onClick ->
	pager.snapToNextPage()
sketch.previous.onClick ->
	pager.snapToPreviousPage()
	
changeSong=(index)->	
	#using index of page component we are changing active name, getting all data from arrays we have created
	songName._element.innerHTML=songs[index].name
	
	artist._element.innerHTML = songs[index].artists[0].name
	#music player gets url of the file of song with index from array of our tracks in playlist
	music.video = songs[index].preview_url
	currentTime.html="0:00"
	songTime.html="0:00"
	slider.knob.x=0
changeSong(current)

#switching songs on switching covers
pager.on "change:currentPage", ->	
	current = pager.horizontalPageIndex(pager.currentPage)
	if current==0
		sketch.previous.states.switch("inactive")
	else if current==(pager.content.children.length-1)
		sketch.next.states.switch("inactive")
	else
		sketch.previous.states.switch("default")
		sketch.next.states.switch("default")
	changeSong(current)

# start listening for music progress
# (this hooks into the existing framer render loop)
Framer.Loop.on "render", ->
	songTimeVal=String("0" + Math.round(music.player.duration)).slice(-2);
	songTime.html='0:'+songTimeVal
	if playing
		currentTimeVal=String("0" + Math.round(music.player.currentTime)).slice(-2);
		currentTime.html='0:' + currentTimeVal
		offset = Utils.modulate(music.player.currentTime, [0, music.player.duration], [0, 1])
		slider.value=offset
		
	