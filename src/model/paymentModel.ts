import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    court: { type: mongoose.Schema.Types.ObjectId, ref: 'Court' },
    bookingDate: { type: Date, required: true },
    startTime: { type: String, required: true }, // 24-hour format, e.g., '15:00'
    endTime: { type: String, required: true },
    price: { type: Number, required: true },
    paid_price:{type:Number,required:true},
    
  });

  const Payment =  mongoose.model('Payment',PaymentSchema);
  export default Payment
  