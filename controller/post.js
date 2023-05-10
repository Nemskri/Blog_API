const Post = require('../models/post')

const getAll = async (req, res) => {
    res.send('success')
}

const getOne = async (req, res) => {
    const id = req.params.id
    res.send(`Post with id:${id}`)
}

const createPost = async (req, res) => {
    const post = await Post.create({
        title: req.body.title,
        desc: req.body.desc,
        img: req.body.img
    })
    res.status(200).json({
        post: {
            title: post.title,
            desc: post.desc
        }
    })
}

module.exports = { getAll, getOne, createPost }