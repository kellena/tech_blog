const router = require('express').Router()
const withAuth = require("../../utils/auth");
const { Post, User, Comment } = require('../../models')



router.get('/', withAuth, async (req, res) => {
    if(!req.session) {
       console.log('you must log in.');
    }
    const postData = await Post.findAll({
        where: {
            user_id: req.session.user_id
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


router.get("/add", withAuth, async (req, res) => {
    res.render("addpost");
});
  

router.post("/add", withAuth, async (req, res) => {
    try {
    const newPost = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    });
        res.json(newPost);
    } catch (err) {
        res.json(err);
    }

});


module.exports = router