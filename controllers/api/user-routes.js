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

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
  
    if (!user) {
        return res.status(400).json({ message: "The username is incorrect." });
    }

    const validPassword = await user.checkPassword(req.body.password);
  
    if (!validPassword) {
        return res.status(400).json({ message: "The password is incorrect." });
    }
  
    req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        res.status(200).json({ user: user, message: "You are now logged in." });
    });

    } catch (err) {
        res.json(err);
    }

});

router.get('/register', async (req, res) => {
    try {
        res.render('register')
    } catch (err) {
        res.json(err)
    }
})


module.exports = router;