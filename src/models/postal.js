import mongoose from 'mongoose';

const PostalSchema = new mongoose.Schema({
  courier: { type: String, required: true },
  package_size: { type: String, required: true },
  weight: { type: Number },
  country: { type: String, required: true },
  price: { type: Number, default: NaN }
});

export default mongoose.model('postal_services', PostalSchema);