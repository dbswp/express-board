// @ts-check
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 4000

const mainRouter = require('./routes/index')
const userRouter = require('./routes/users')
const boardRouter = require('./routes/board')

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', mainRouter)
app.use('/users', userRouter)
app.use('/board', boardRouter)

app.use((err,req,res,next) => {
    console.log(err.stack)
    res.status(err.statusCode)
    res.send(err.message)
})


//get방식으로 요청이 들어오면 실행시켜줘!
// localhost뒤에 /요청되면 오면 미들웨어 기능 실행
app.get('/', (req,res) => {
    res.send('Hello express world')
})

//라우팅을 통해 주소 요청에 따라 각각 담당하는 파일 나누기

app.listen(PORT, (req,res) => {
    console.log(`서버는 ${PORT} 번에서 실행`)
})