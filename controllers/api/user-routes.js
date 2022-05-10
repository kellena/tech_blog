const router = require('express').Router()

const { User } = require('../../models')

router.get('/login', async (req, res) => {
    console.log('something');
    try {
        res.render('login')
    } catch (err) {
        res.json(err)
    }
})

router.get('/register', async (req, res) => {
    try {
        res.render('register')
    } catch (err) {
        res.json(err)
    }
})


module.exports = router;