import { storage, Postit, User } from './data'

const logic={
    createPostit(text){
        const postit=new Postit (text)

        const postits=this.listPostits()

        postits.push(postit)

        this.persistPostits(postits)
    },

    listPostits(){
        return JSON.parse(storage.getItem('postits'))
    },

    persistPostits(postits){
        storage.setItem('postits', JSON.stringify(postits))
    },

    deletePostit(id){
        let postits=this.listPostits()

        postits=postits.filter(postit=> postit.id !==id)

        this.persistPostits(postits)
    },

    modifyPostit(id){
        let pos = document.getElementById(id)
        
        const postits=this.listPostits().map(posts => {
            if(posts.id===id) {
                posts.text=pos.children[0].textContent
            }
            return posts
        })

        this.persistPostits(postits)
    },









    createUser(name, surname, username, password){
        const user=new User (name, surname, username, password)

        const users=this.listUsers()

        users.push(user)

        this.persistUsers(users)
    },

    listUsers(){
        return JSON.parse(storage.getItem('users'))
    },

    persistUsers(users){
        storage.setItem('users', JSON.stringify(users))
    }


}

export default logic