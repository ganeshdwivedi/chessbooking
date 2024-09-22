import mongoose from "mongoose";

const SportsSchema = new mongoose.Schema({
    sportName: { type: String, required: true, unique: true }
  });

  const Sports = mongoose.model('Sports',SportsSchema);
  export default Sports;
  