import mongoose from 'mongoose'
import User from './user.model'
const bookingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    timeSlot:{
        type: String,
        required: true,
    },
    numberOfPeople:{
        type: Number,
        required: true,
    },
    paymentId:{
        type: String,
        required: true,
    },
    creditAmount:{
        type: Number,
        default: 50,
    },
    creditNote: {
        type: String,
        default: 'Full credit available on visit'
    },
},{timestamps: true})

export default mongoose.model('Booking', bookingSchema)