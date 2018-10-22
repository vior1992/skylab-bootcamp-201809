/*class Playlist {

    id;
    tracks;


    constructor(_id, ) {
        id = this.Id(_id);
        tracks = [];
    }


    get Id() {
        return id;
    }

    set Id(value) {
        if ( typeof value !== "string") throw TypeError(`id is not a string`)
        if (value.trim().length === 0) throw Error(`id is empty or blank`)

        id = value;
    }

    get Tracks() {
        return tracks;
    }

    set Tracks(value) {
        if ( !Array.isArray(value)) throw TypeError(`tracks is not an array`)
        if (value.length === 0) { tracks.length = 0
        } else {
         tracks = value;
        }
    }


    updatePlayList (track) {
        
    }

}
*/


export default class User {

    constructor(){
        this.playList = []
    }

    get Name(){
        return this.name;
    }

    set Name (value){
        if ( typeof value !== "string") throw TypeError(`name is not a string`)
        if (value.trim().length === 0) throw Error(`name is empty or blank`)

        this.name = value;
    }


    get Surname() {
        return this.surname;
    }

    set Surname(value) {
        if ( typeof value !== 'string') throw TypeError(`surname is not a string`)
        if (!value.trim().length) throw Error(`surname is empty or blank`)

        this.surname = value;
    }


    get Email() {
        return this.email;
    }

    set Email(value) {
        if ( typeof value !== 'string') throw TypeError(`email is not a string`)
        if (!value.trim().length) throw Error(`email is empty or blank`)
        if (value.indexOf('@') === -1) throw Error(`email is not an email`)

        this.email = value;
    }


    get Username() {
        return this.username;
    }

    set Username(value) {
        if ( typeof value !== 'string') throw TypeError(`username is not a string`)
        if (!value.trim().length) throw Error(`username is empty or blank`)

        this.username = value;
    }


    get Password() {
        return this.password;
    }

    set Password(value) {
        if ( typeof value !== 'string') throw TypeError(`password is not a string`)
        if (!value.trim().length) throw Error(`password is empty or blank`)

        this.password = value;
    }    


    get Playlists() {
        return this.playlists;
    }

    set Playlists(value) {
        if ( !Array.isArray(value)) throw TypeError(`Playlist is not an array`)
        this.playlists = value;
    }


    createPlayList (playList) {

        this.playlists.push(playList)

    }

    

    existPlayList (playList) {

        return !!this.playlists.find(_playList => _playList.id === playList.id);

    }
}
