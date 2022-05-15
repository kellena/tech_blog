const router = require('express').Router()
const withAuth = require('../../utils/auth')
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

router.post("/:id", withAuth, async (req, res) => {

    const newComment = await Comment.create({
        comment: req.body.comment,
        post_id: req.params.id,
        user_id: req.session.user_id,
    });

    try {
        res.json(newComment);
    } catch (err) {
        res.json(err);
    }

});

router.put('/:id', async (req, res) => {

    const updatedPost = await Post.findOne({
        where: {
            id: req.params.id
        }
    });

    try {

        if(!updatedPost) {
            res.status(404).json({ message: 'Post could not be found.'})
        }
        if(updatedPost.id === req.session.id) {
            await updatedPost.update({ content: req.body.content})
        }
  
        res.json(updatedPost)
  
    } catch (err) {
        res.json(err)
    }

});

router.delete('/:id', async (req, res) => {

    try {

        const deletedPost = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        if(updatedPost.user_id == req.session.id) {
            await deletedPost.destroy()
            res.json(deletedPost)
        } else {
            res.json({ message: 'Only the owner of the post can delete it.'})
        }

    } catch (err) {
        res.json(err)
    }

});


module.exports = router;