import express from 'express'
import passport from 'passport'
import {getCurrentUser, logoutUser} from '../controllers/auth.controller.js'

const router = express.Router()

router.get(
    '/google',
    passport.authenticate('google',{
        scope: ['profile', 'email']
    })
)

router.get(
    '/google/callback',
    passport.authenticate('google',{
        failureRedirect: '/login',
        successRedirect: process.env.CLIENT_URL
    })
)

router.get('/me', getCurrentUser);
router.get('/logout', logoutUser)

export default router