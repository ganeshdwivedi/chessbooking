import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin', 'superadmin'], required: true },
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }], // For customers
    turf: { type: mongoose.Schema.Types.ObjectId, ref: 'Court' }, // For admins
  });

const User = mongoose.model("User", UserSchema);
export default User;