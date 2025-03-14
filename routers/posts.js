const express = require('express')
const router = express.Router()
const posts = require('../data/menu')

//index
router.get('/', (req, res) => {
  res.json(posts)
})

//store
router.post('/:id', (req, res) => {
  res.send(`Return post with id: ${postId}`)
} )

//ceate
router.post('/', (req, res) => {
  res.send('Store a new post')
} )

//update
router.put('/:id', (req, res) => {
  res.send(`Update the post with an id of ${req.params.id}`)
})

//delete
router.delete('/:id', (req, res) => {
  res.send(`Delete the post with an id of ${req.params.id}`)
})

module.exports = router