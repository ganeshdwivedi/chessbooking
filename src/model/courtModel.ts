import mongoose from 'mongoose'

const CourtSchema = new mongoose.Schema({
    courtName: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    location: { type: String, required: true },
    ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Refers to Admin
    pricePerHour: { type: Number, required: true },
    sportsAvailable: [String], // List of sports (e.g., 'football', 'badminton')
    workingHours: { start: String, end: String }, // e.g., { start: '08:00', end: '22:00' }
  });
  
  const Court = mongoose.model("Court",CourtSchema);
  export default Court;