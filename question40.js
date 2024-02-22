function make_album(artistName, albumTitle, numberOfTracks) {
    var alb = {
        artist: artistName,
        album: albumTitle,
        tracksNumber: numberOfTracks
    };
    return alb;
}
var incomingMusicAlbum = make_album("Thelonious Monk", "Solo Monk");
var incomingMusicAlbum1 = make_album("Natalia Lafourcade ", "Hasta La Raiz");
var incomingMusicAlbum2 = make_album("Abba", " Voulez-Vouz", 13);
console.log(incomingMusicAlbum);
console.log(incomingMusicAlbum1);
console.log(incomingMusicAlbum2);
