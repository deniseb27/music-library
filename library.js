const library = {
  tracks: { 
    t01: { 
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: { 
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: { 
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: { 
    p01: { 
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },

  printPlaylists: function() {
    for (let playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks: function() {
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);

    for (let trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    playlist.tracks.push(trackId);
  },

  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function(name) {
    const id = this.generateUid();
    this.playlists[id] = {
      id: id,
      name: name,
      tracks: []
    };
  }
};

// Usage examples:
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");

library.addTrackToPlaylist("t03", "p01");
library.printPlaylist("p01");

library.addTrack("Lost Ones", "Ms. Lauryn Hill", "The Miseducation of Lauryn Hill");
console.log(library.tracks);

library.addPlaylist("My Favourite Songs");
library.printPlaylists();




// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
