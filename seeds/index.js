const sequelize = require('../config/connection')
const { User, Post, Comment } = require('../models')

const userData = require('./userData.json')
const postData = require('./postData.json')
const commentData = require('./commentData.json')

const seedDb = async () => {

    try {

        await sequelize.sync({ force: true })

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        })

        await Post.bulkCreate(postData)
        await Comment.bulkCreate(commentData)

    } catch (err) {
        console.log(err);
    }

};


seedDb ()