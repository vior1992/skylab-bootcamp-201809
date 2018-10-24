class Track {

    constructor(_id, _name, _imageUrl, _preview) {

        this.id = _id
        this.name = _name
        this.imageurl = _imageUrl
        this.preview = _preview
    }


    get Id() {
        return this.id;
    }

    set Id(value) {
        if ( typeof value !== "string") throw TypeError(`id track is not a string`)
        if (!value.trim().length) throw Error(`id track is empty or blank`)

        this.id = value;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        if ( typeof value !== "string") throw TypeError(`name track is not a string`)
        if (!value.trim().length) throw Error(`name track is empty or blank`)

        this.name = value;
    }

    get Imageurl() {
        return this.imageurl;
    }

    set Imageurl(value) {
        if ( typeof value !== "string") throw TypeError(`imageurl track is not a string`)
        if (!value.trim().length) throw Error(`imageurl track is empty or blank`)

        this.imageurl = value;
    }

    get Preview() {
        return this.preview;
    }

    set Preview(value) {
        if ( typeof value !== "string") throw TypeError(`preview track is not a string`)
        if (!value.trim().length) throw Error(`preview track is empty or blank`)

        this.preview = value;
    }
}


class Playlist {

    constructor(_id) {
        
        this.tracks = [];
    }


    get Id() {
        return this.id;
    }

    set Id(value) {
        if ( typeof value !== "string") throw TypeError(`id playlist is not a string`)
        if (!value.trim().length) throw Error(`id playlist is empty or blank`)

        this.id = value;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        if ( typeof value !== "string") throw TypeError(`name is not a string`)
        if (!value.trim().length) throw Error(`name is empty or blank`)

        this.name = value;
    }

    get Image() {
        return this.image;
    }

    set Image(value) {
        if ( typeof value !== "string") throw TypeError(`image is not a string`)
        if (!value.trim().length) throw Error(`image is empty or blank`)

        this.image = value;
    }

    get Tracks() {
        return this.tracks;
    }

    set Tracks(value) {
        if ( !Array.isArray(value)) throw TypeError(`tracks is not an array`)
        this.tracks = value;
    }

    findTrack(trackId){
        
        return this.tracks.find((el) => el.id === trackId)
    }

    addTrack (track) {

        if ((track) && (track.Id) && (typeof track.Id === "string")) {
            if (!this.tracks.length) this.tracks.push(track)

            if (!this.findTrack(track.Id))
                this.tracks.push(track)
            else
                throw Error("The track exists in the playlist")
        }
        else
            throw Error("Track object is invalid")
        
    }

    deleteTrack (trackId) {

        if (this.tracks.length === 0) throw Error("The playlist has not tracks")

        if (this.tracks.find((el) => el.id === trackId)){
            let index = this.tracks.indexOf((el) => el.id === trackId)
            this.tracks.splice(index, 1)
            return true

        }
        else
            throw Error("The track not exists in the playlist")
    }

}



class User {

    constructor(){
        this.playLists = []
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
        return this.playLists;
    }

    set Playlists(value) {
        if ( !Array.isArray(value)) throw TypeError(`Playlist is not an array`)
        this.playLists = value;
    }


    createPlayList (playList) {

        if (this.playLists.length === 0)
            this.playLists.push(playList)
        else
        {
            const ele = this.playLists.find(el => el.name === playList.name)
            if (!ele){
                this.playLists.push(playList)                        
            }
            else
                throw Error("Exists a play list with the name: " + playList.name)
        }
    }

    
    deletePlayList (playListId) {

        if ( typeof playListId !== 'string') throw TypeError(`playListId is not a string`)
        if (!playListId.trim().length) throw Error(`playListId is empty or blank`)

        if (this.playLists.find(p => p.id === playListId)){            
            let index = this.playLists.indexOf(el => el.id === playListId)
            this.playLists.splice(index,1)
        }
        else
            throw Error("PlayList not found")

    }

    existsTrackInPlayList = (trackId) => {

        if ( typeof trackId !== 'string') throw TypeError(`trackId is not a string`)
        if (!trackId.trim().length) throw Error(`trackId is empty or blank`)
        let found = false;
        if (this.playLists.length){

            this.playLists.forEach(playlist => {
                
                playlist.forEach(track => {

                    if (track.Id === trackId)
                    {
                        found = true
                        return
                    }

                })
                if (found)
                    return

            });
            return found
        }
        else
            throw Error("The user has not playlists")
    }
}

export default {
    User,
    Track,
    Playlist
}