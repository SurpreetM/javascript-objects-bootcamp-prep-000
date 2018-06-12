var playlist = {Artist: "SongTitle"}

function updatePlaylist (obj, artistName, songTitle) {
 obj[artistName] = songTitle
 return obj
}

function removeFromPlaylist (obj, artistName) {
  delete obj.Slowdive
  return obj
}