import {storage, Postit} from './data'

const logic = {
    
    createPostit(text) {
        const postit = new Postit(text)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))

    },

    listPostits(id) {
        return JSON.parse(storage.getItem('postits'))

    },

    deletePostit(id){
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    }
}

export default logic