

class Youtube {
    constructor () {
        this.api_key = 'AIzaSyAieX4rBBAB612ai2A1HJYKK9416cd8f2U'
        
        this.root_url = "https://www.googleapis.com/youtube/v3/"

    }

    search(query) {
        return fetch(this.root_url + 'search?part=snippet&key='+this.api_key+'&q='+query+'&videoCategoryId=10&type=video', {
            method: 'GET'
        })
        .then(res => res.json())
        .then (res => res.items)
    }
}

export default Youtube
//module.exports = Youtube