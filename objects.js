var playlist = {artistName: "songTitle"}

function updatePlaylist (obj, key, value) {
 obj[key] = value
 return obj
}

function removeFromPlaylist (obj, key) {
  var toRemove = key
  delete obj[toRemove]
  return obj
}