require('dotenv').config()
const express=require('express')
const databaseConnection = require('./config/databaseConfig')
const Errormiddleware = require('./middleware/errorMiddleware')
const chatRouter = require('./routes/chatRoutes')
const messageRouter = require('./routes/messageRoutes')
const userRouter = require('./routes/userRoutes')
var cors = require('cors')
const PORT=process.env.PORT || 4000


const app=express()
databaseConnection()

app.use(cors())
app.use(express.json())


app.use('/v1/user',userRouter)
app.use('/v1/chat',chatRouter)
app.use('/v1/message',messageRouter)

app.use(Errormiddleware) //sabse last me use krna he error middleware ko

const server=app.listen(PORT,()=>{
    console.log("server is running fine")
})






