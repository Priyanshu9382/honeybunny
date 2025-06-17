import Booking from '../models/booking.model.js'
import asyncHandler from '../middlewares/async.middleware.js'
import ErrorHandler from '../utils/errorHandler.js'

const MAX_TABLES = 15

export const createBooking = asyncHandler(async(req,res,next)=>{
  const { date, timeSlot, numberOfPeople, paymentId} = req.body
  const userId = req.user._id;  
})