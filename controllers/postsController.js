const menu = require('../data/menu')

function index(req, res) {
  res.json(menu)
}

function show(req, res) {
  res.send(`Return post with id: ${postId}`)
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
  res.send(`Delete the post with an id of ${req.params.id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}