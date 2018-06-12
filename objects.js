var playlist = {artistName: "songTitle"}

function updatePlaylist (obj, key, value) {
 obj[key] = value
 return obj
}

function removeFromPlaylist (obj, name) {
  var artistName = name
  delete obj[artistName]
  return obj
}