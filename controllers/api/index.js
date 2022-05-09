const router = require('express').Router()

const dashboardRoutes = require('./dashboardRoutes')
const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')

router.use('/dashboard', dashboardRoutes)
router.use('/post', postRoutes)
router.use('/user', userRoutes)


module.exports = router 