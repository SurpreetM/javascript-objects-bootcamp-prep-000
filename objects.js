var playlist = {artistname: "SongTitle"}

function updatePlaylist (obj, artistName, songTitle) {
 obj[artistName] = songTitle
 return obj
}

function removeFromPlaylist (obj, Name) {
  var artistName = Name
  delete obj[artistName]
  return obj
}