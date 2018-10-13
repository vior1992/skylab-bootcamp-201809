const _AUTH_CODE = 'NmM3NGE2OTJmZDBlNGVmMWI1MDI2NjA1NWE2ZjkwMDU6NjZmNzRhZjI4NzlhNDk4NTkwMTkwYmEwMmYyZGYzMTc=';
const _REFRESH_TOKEN = 'AQC6wHvkbamh_RKMDw3iyvo4Hu1PQPZEEkzqLbRExj_az0xfbfo1Nt2Japo7HRQYMtW--WSCBc_IphJCjzihL6-H0Ig8cJd8CSDuhfFzugBhLKhL8gTpI_jx7ovecFW7aLzGQg';

class Spotify {
    constructor() {
        this.auth_code = _AUTH_CODE;
        this.refresh_token = _REFRESH_TOKEN;
    }

    getAccessToken() {
        return new Promise((resolve, reject) => {
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
        });
    }

    search(query) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: 'https://api.spotify.com/v1/search?q='+query+'&type=artist,album&limit=12',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer BQCv2H8AckBsVXTGcCP3S3z74NW0TuZVC-0_yL9_zZIMp1oBpuxt-tl46GEoiqQoc2G4_3AGBU0VW4_rt0hFfXVbAleNAk4Woanp6TpXbDpraa1QZYROTPBxxb0Ohr4iWIZv9ExXXhGnDNA");
                },
                success: function(result) {
                    resolve(result);
                }
            });
        });
    }
}
