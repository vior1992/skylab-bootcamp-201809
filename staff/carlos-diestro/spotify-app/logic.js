const logic = {
  token: "BQC8awFxFJDHwtnGduiRNhUaUPF7sgtDFhBTysrsBqOftOAzyuDYGtX9txXrwSxBAc4y3Ix-WuFm5a5XMQN_Z9CpQqUUcDBYvBFgh-Xo6jTtPqNFz-IDzHrwS0pK4fAqt1jh-ECVhsUapWb3XHLOF0j292PoCSCYgA",

  call(path) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest()

      xhr.addEventListener("load", function () {
          var response = JSON.parse(xhr.responseText)

          resolve(response)
      })

      xhr.addEventListener("error", function () {
          reject() // TODO
      })

      xhr.open("GET", path)

      xhr.setRequestHeader("authorization", "Bearer " + this.token)

      xhr.send()
    })
  },

  searchArtists(name) {
    if(!name || name.length === 0) throw TypeError(`${name} is empty or blank`)
    if(typeof name !== "string") throw Error(`${name} is invalid value`)

    return this.call("https://api.spotify.com/v1/search?type=artist&query=" + name)
  },

  listAlbums(albumId) {
    if(!albumId || albumId.length === 0) throw TypeError(`${albumId} is empty or blank`)
    if(typeof albumId !== "string") throw Error(`${albumId} is invalid value`)

    return this.call("https://api.spotify.com/v1/artists/" + albumId + "/albums")
  },

  listTracks(trackId) {
    if(!trackId || trackId.length === 0) throw TypeError(`${trackId} is empty or blank`)
    if(typeof trackId !== "string") throw Error(`${trackId} is invalid value`)

    return this.call("https://api.spotify.com/v1/albums/" + trackId + "/tracks")
  }
}