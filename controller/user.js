const UserB = require('../models/users')


const register = async (req, res) => {

    const user = await UserB.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        img: req.body.img
    })
    res.status(200).json({
        user: {
            name: user.name,
            mail: user.email,
            img: user.img
        }
    })
}

module.exports = register