const router = require('express').Router()

const { User, Post, Comment } = require('../../models')

router.get('/', async (req, res) => {

    const postData = await Post.findAll({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
    });

    const commentData = await Comment.findAll({
        where: {
            post_id: req.params.id,
        },
        include: [
            {
            model: User,
            attributes: ["username"],
            },
        ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    
    try {
        res.render("post", {
            posts,
            comments,
        });
    } catch (err) {
        res.json(err);
    }

});


module.exports = router;