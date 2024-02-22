interface music_album {
    artist:string;
    album:string;
    tracksNumber?:number;
}

function make_album(artistName:string,albumTitle:string,numberOfTracks?:number):music_album{
    const alb:music_album = {
        artist:artistName,
        album:albumTitle,
        tracksNumber:numberOfTracks
    };
    return alb;
}

const incomingMusicAlbum = make_album("Thelonious Monk","Solo Monk");
const incomingMusicAlbum1 = make_album("Natalia Lafourcade ","Hasta La Raiz");
const incomingMusicAlbum2 = make_album("Abba"," Voulez-Vouz",13);

console.log(incomingMusicAlbum);
console.log(incomingMusicAlbum1);
console.log(incomingMusicAlbum2);