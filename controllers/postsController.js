const menu = require('../data/menu')

function index(req, res) {
  res.json(menu)
}

function show(req, res) {
  const postId = Number(req.params.id)

    //troviamo il post tramite ID
    const post = menu.find(post => post.id === postId)
    console.log(post);
    
  
    res.json(post)
}

function store(req, res) {
  res.send('Store a new post')
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