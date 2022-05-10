const router = require('express').Router()

const { Post, User, Comment } = require('../../models')


router.get('/', async (req, res) => {
    if(!req.session) {
       console.log('you must log in.');
    }
    const postData = await Post.findAll({
        where: {
            user_id: 1
        },
        include: [
            {
              model: User,
              attributes: ["id", "username"],
            },
            {
              model: Comment,
              attributes: ["comment", "user_id", "created"],
            },
          ],
        });

    const posts = postData.map((post) => post.get({ plain: true }))

    try {
        
        res.render('dashboard', {
            posts
        })
    } catch (err) {
        res.json(err)
    }

});


module.exports = router