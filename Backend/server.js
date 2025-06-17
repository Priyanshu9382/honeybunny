import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import session from 'cookie-session'
import passport from 'passport'

import connectDB from './db/db.js'
import {errorHandler} from './middlewares/error.middleware.js'
import authRoutes from './routes/auth.route.js'
import './config/passport.config.js'


connectDB()

const app = express()

app.use(cors({origin:process.env.CLIENT_URL, credentials:true}))
app.use(express.json())

app.use(
    session({
        name:"session",
        keys: [process.env.SESSION_SECRET],
        maxAge: 24*60*60*1000,
    })
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/auth", authRoutes)

app.use(errorHandler)

const PORT =process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    
})