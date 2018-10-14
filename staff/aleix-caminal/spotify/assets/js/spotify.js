const _AUTH_CODE = 'NmM3NGE2OTJmZDBlNGVmMWI1MDI2NjA1NWE2ZjkwMDU6NjZmNzRhZjI4NzlhNDk4NTkwMTkwYmEwMmYyZGYzMTc=';
const _REFRESH_TOKEN = 'AQC6wHvkbamh_RKMDw3iyvo4Hu1PQPZEEkzqLbRExj_az0xfbfo1Nt2Japo7HRQYMtW--WSCBc_IphJCjzihL6-H0Ig8cJd8CSDuhfFzugBhLKhL8gTpI_jx7ovecFW7aLzGQg';

class Spotify {
    constructor() {
        this.auth_code = _AUTH_CODE;
        this.refresh_token = _REFRESH_TOKEN;
        this.access_token = this.getAccessToken();
    }

    getAccessToken() {
        return 'BQAeCnEjhl0bVeB-gdISYVXdtsy5s6RnOVhSpe4-661nSLTyOIXSNPURBSQ_A2WPfSC-Evp8bzipYP93-htOugwEQJ4s5-iEShUQVUSmz2UyvgA4AH43M4rmP2pkfpjlomwdSMKCoVjs8WM';
        /* return new Promise((resolve, reject) => {
            $.ajax({
                method: "POST",
                url: "https://accounts.spotify.com/api/token",
                data: {
                    "grant_type": "refresh_token",
                    "refresh_token": this.refresh_token
                },
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + this.auth_code);
                },
                success: function(result) {
                    resolve(result);
                }
            });
        }); */
    }

    search(query) {
        let token = this.access_token;
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: 'https://api.spotify.com/v1/search?q='+query+'&type=artist,album&limit=12',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + token);
                },
                success: function(result) {
                    resolve(result);
                }
            });
        });
    }

    getArtist(artist) {
        let token = this.access_token;
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: 'https://api.spotify.com/v1/artists/'+artist+'/albums?limit=50',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + token);
                },
                success: function(result) {
                    resolve(result);
                }
            });
        });
    }

    getAlbum(album) {
        let token = this.access_token;
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: 'https://api.spotify.com/v1/albums/'+album+'/tracks?limit=50',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + token);
                },
                success: function(result) {
                    resolve(result);
                }
            });
        });
    }
}
