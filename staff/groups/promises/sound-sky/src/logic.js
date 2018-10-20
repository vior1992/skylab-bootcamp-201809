const logic = {
    registerUser(name, surname, username, email, password) {
        return fetch('https://skylabcoders.herokuapp.com/api/user', {

            method: 'POST', 
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ name, surname, username, email, password})

        })
        .then(res => res.json())
        .then(res => {
            if (res.error) throw Error(res.error)
        })

    },

    
    
}


export default logic