import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    message: { type: String, trim: true },
    property: { type: String, default: 'Infinia' },
    status: {
      type: String,
      enum: ['new', 'contacted', 'site-visit-scheduled', 'closed'],
      default: 'new',
    },
    source: { type: String, default: 'website' },
  },
  { timestamps: true }
);

export default mongoose.model('Inquiry', inquirySchema);
