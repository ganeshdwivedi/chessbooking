import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    locationName: { type: String, required: true, unique: true },
    courts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Court' }]
  });
  
  const Location = mongoose.model('Location',LocationSchema);
  export default Location