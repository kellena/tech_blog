const router = require("express").Router();

const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {

    const postData = await Post.findAll({

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

    const posts = postData.map((post) => post.get({ plain: true }));

    try {
        res.render("home", {
            posts,
        });

    } catch (err) {
        res.json(err);
    }

});


module.exports = router;