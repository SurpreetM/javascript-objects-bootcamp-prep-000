var playlist = {Slowdive: "Alison"}

function updatePlaylist (obj, artistName, songTitle) {
 return Object.assign({}, playlist, {[artistName]:"songTitle"})
}