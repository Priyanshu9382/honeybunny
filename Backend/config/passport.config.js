import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import User from '../models/user.model.js'



passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        async(accessToken, refreshToken, Profiler, done)=>{
            try {
                const existingUser = await User.findOne({googleId: Profiler.id})
                
                if(existingUser) return done(null, existingUser)

                const newUser = await User.create({
                    googleId: profile.id,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    profileImage: profile.photos[0].value,  
                })
                return done(null, newUser)
            } catch (error) {
                return done(error, false)
            }
        }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done) =>{
    try{
        const user = await User.findById(id);
        done(null, user)
    } catch(err){
        done(err, null)
    }
})