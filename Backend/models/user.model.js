import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        googleId:{
            type: String,
            required: true,
            unique: true,
        },
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        profileImg:{
            type: String
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
    },
    {
        collection: "users"
    }
)

const User = mongoose.model("User", userSchema)
export default User