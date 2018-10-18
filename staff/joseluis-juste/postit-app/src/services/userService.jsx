require('isomorphic-fetch')

const userService = {

    registerUser(name, surname, email,phone,username, password){

        if (typeof name !== "string") throw TypeError (`${name} is not a string`)
        if (typeof surname !== "string") throw TypeError (`${surname} is not a string`)
        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)
        if (typeof email !== "string") throw TypeError (`${email} is not a string`)
        if (typeof phone !== "string") throw TypeError (`${phone} is not a string`)

        if (!name.trim()) throw TypeError (`${name} is empty`)
        if (!surname.trim()) throw TypeError (`${surname} is empty`)
        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)
        if (!phone.trim()) throw TypeError (`${phone} is empty`)
        if (!email.trim()) throw TypeError (`${email} is empty`)
                
       
       return fetch("https://skylabcoders.herokuapp.com/api/user",{

            mehtod: "POST",
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body:JSON.stringify({name, surname, email,phone,username, password})
        }).then( res => {

            return res.json();

        }).then(res => {

            if (res.status === "OK") 
                return res.data.id   
            else
                throw Error(res.error)

        })
    },

    updateUser(id,token,name, surname, email,phone,username, password){

        if (typeof id !== "string") throw TypeError (`${id} is not a string`)
        if (typeof token !== "string") throw TypeError (`${token} is not a string`)
        if (typeof name !== "string") throw TypeError (`${name} is not a string`)
        if (typeof surname !== "string") throw TypeError (`${surname} is not a string`)
        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)
        if (typeof email !== "string") throw TypeError (`${email} is not a string`)
        if (typeof phone !== "string") throw TypeError (`${phone} is not a string`)

        if (!id.trim()) throw TypeError (`${id} is empty`)
        if (!token.trim()) throw TypeError (`${token} is empty`)
        if (!name.trim()) throw TypeError (`${name} is empty`)
        if (!surname.trim()) throw TypeError (`${surname} is empty`)
        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)
        if (!phone.trim()) throw TypeError (`${phone} is empty`)
        if (!email.trim()) throw TypeError (`${email} is empty`)
                
       
       return fetch(`https://skylabcoders.herokuapp.com/api/user/${id}`,{

            mehtod: "PUT",
            headers:{
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": `Bearer ${token}`
            },
            body:JSON.stringify({name, surname, email,phone,username, password})
        }).then( res => {

            return res.json();

        }).then(res => {

            if (res.status === "OK") 
                return true
            else
                throw Error(res.error)

        })
    },


    authenticateUser(username, password){

       
        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)
        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)

        return fetch("https://skylabcoders.herokuapp.com/api/auth",{

            mehtod: "POST",
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body:JSON.stringify({username, password})
        }).then( res => {

            return res.json();

        }).then(res => {

            if (res.status === "OK") 
                return {token:res.data.token, id:res.id}   
            else
                throw Error(res.error)

        })
    },

    getUserInfo(id, token){

       
        if (typeof id !== "string") throw TypeError (`${id} is not a string`)
        if (typeof token !== "string") throw TypeError (`${token} is not a string`)
        if (!id.trim()) throw TypeError (`${id} is empty`)
        if (!token.trim()) throw TypeError (`${token} is empty`)

        return fetch(`https://skylabcoders.herokuapp.com/api/user${id}`, {

            mehtod: "GET",
            headers:{
                "Authorization": `Bearer ${token}`
            },
           
        }).then( res => {

            return res.json();

        }).then(res => {

            if (res.status === "OK") 
                return res.data
            else
                throw Error(res.error)

        })
    },

    deleteUser(id, token,username, password){

       
        if (typeof id !== "string") throw TypeError (`${id} is not a string`)
        if (typeof token !== "string") throw TypeError (`${token} is not a string`)
        if (typeof username !== "string") throw TypeError (`${username} is not a string`)
        if (typeof password !== "string") throw TypeError (`${password} is not a string`)
        if (!username.trim()) throw TypeError (`${username} is empty`)
        if (!password.trim()) throw TypeError (`${password} is empty`)
        if (!id.trim()) throw TypeError (`${id} is empty`)
        if (!token.trim()) throw TypeError (`${token} is empty`)

        return fetch(`https://skylabcoders.herokuapp.com/api/user${id}`, {

            mehtod: "DELETE",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json; charset=utf-8"
            },
            body
           
        }).then( res => {

            return res.json();

        }).then(res => {

            if (res.status === "OK") 
                return true
            else
                throw Error(res.error)

        })
    },

}


module.exports = userService

