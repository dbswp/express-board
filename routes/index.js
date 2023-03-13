const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('index', {msg: '이 데이터는 백엔드가 보냈어요'})
    // 뭔가를 그려준다. view파일을 읽어줌, 그려주고 싶은 view파일 명 입력
})

module.exports = router