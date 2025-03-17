const menu = require('../data/menu')

function index(req, res) {
  res.json(menu)
}

function show(req, res) {
  const postSlug = req.params.slug

  //troviamo il post tramite slug
  const post = menu.find(post => post.slug === postSlug)
  console.log(post);


  res.json(post)
}

function store(req, res) {
  const newSlug = req.body.title.toLowerCase()

  const newPost = {
    title: req.body.title,
    slug: newSlug,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }

  //aggiungiamo il nuovo post al menu
  menu.push(newPost)

  console.log(menu);

  res.status(201)
  res.json(newPost)
  

}

function update(req, res) {
  res.send(`Update the post with an id of ${req.params.id}`)
}

function modify(req, res) {
  res.send(`Modify the post with an id: ${req.params.id}`)
}

function destroy(req, res) {
  const postId = Number(req.params.id)

  const post = menu.find(post => post.id === postId)
  console.log(post);

  //rimuoviamo il singolo id dall'arrey
  menu.splice(menu.indexOf(post), 1)
  console.log(menu);

  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}