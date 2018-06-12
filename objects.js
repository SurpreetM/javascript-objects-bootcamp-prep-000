var playlist = {Slowdive: "Alison"}

function updatePlaylist (obj, artistName, songTitle) {
 obj[artistName] = songTitle
 return obj
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}