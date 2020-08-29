import mongoose from 'mongoose';

const PlacesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    lat: {
      type: Number,  
    },
    lng: {
      type: Number, 
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Places', PlacesSchema);
