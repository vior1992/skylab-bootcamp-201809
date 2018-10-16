const logic = {
  createPostIt(text) {
    const postit = new PostIt(text)

    const postits = this.listPostIts()

    postits.push(postit)

    this.persistPostIts(postits)
  },

  deletePostIt(id) {
    let postits = this.listPostIts()

    postits = postits.filter((item) => item.id !== id)

    this.persistPostIts(postits)
  },

  persistPostIts(postits) {
    storage.setItem('postits', JSON.stringify(postits))
  },

  listPostIts() {
    return JSON.parse(storage.getItem('postits'))
  }
}