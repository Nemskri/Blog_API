const express = require('express')
const router = express.Router()
const { getAll, getOne, createPost } = require('../controller/post')

router.route("/").get(getAll).post(createPost)
router.get("/:id", getOne)

module.exports = router