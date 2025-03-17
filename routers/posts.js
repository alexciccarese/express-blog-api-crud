const express = require('express')
const router = express.Router()
const posts = require('../data/menu')
const postsController = require('../controllers/postsController')

//index
router.get('/', postsController.index)

//store
router.get('/:slug', postsController.show)

//ceate
router.post('/', postsController.store)

//update
router.put('/:slug', postsController.update)

//delete
router.delete('/:slug', postsController.destroy)

module.exports = router