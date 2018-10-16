//Business


const logic = {
    createPostit(text) {
        const postit = new Postit(text)

        const postits = JSON.parse(storage.getItem('postits'))

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))
    },

    listPostits() {
        return JSON.parse(storage.getItem('postits'))
    },

    deletePostit(id) {
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        storage.setItem('postits', JSON.stringify(postits))
    },

    editPostit(id) {
        let newText = prompt('write new text')
        let postits = JSON.parse(storage.getItem('postits'))

        postits = postits.filter(postit => postit.id !== id)

        const postit = new Postit(newText)

        postit.id = id

        postits.push(postit)

        storage.setItem('postits', JSON.stringify(postits))

        console.log(postits);
        

        
    }
}