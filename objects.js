var playlist = {artistname: "SongTitle"}

function updatePlaylist (obj, artistName, songTitle) {
 obj[artistName] = songTitle
 return obj
}

function removeFromPlaylist (obj, name) {
  var artistName = name
  delete obj[artistName]
  return obj
}