import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tagline: String,
    location: {
      plot: String,
      layout: String,
      city: String,
      pincode: String,
    },
    configuration: { type: String, default: '3 BHK' },
    superBuiltUpArea: Number, // sq. ft.
    structure: String, // e.g. "G + 6"
    flatNumbers: [String],
    vastuZones: [
      {
        direction: String,
        name: String,
        room: String,
        element: String,
        description: String,
      },
    ],
    roomDimensions: [
      {
        room: String,
        dimensions: String,
      },
    ],
    amenities: [String],
    specifications: [
      {
        category: String,
        details: String,
      },
    ],
    connectivity: [
      {
        place: String,
        distance: String,
      },
    ],
    contact: {
      bookingPhone: String,
      email: String,
      office: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Property', propertySchema);
