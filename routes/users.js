const express = require('express')

const router = express.Router()

// http://localhost:4000/users
router.get('/', (req,res) => {
    res.render('users', {user: '윤제'})
})

module.exports = router