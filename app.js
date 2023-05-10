const express = require('express')
const app = express();
const connectDb = require('./db/connect')
require('dotenv').config();

const userRouter = require('./routes/user')
const postRouter = require('./routes/post')

app.use(express.json());
app.use("/api/v1/posts", postRouter)
app.use('/api/v1/user', userRouter)

const port = 5000
const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server Live on Port: ${port}...`))

    } catch (e) {
        console.log({
            error: e,
            mssg: 'Failed to connect to Server'
        })
    }
}
start();

