import mongoose from 'mongoose';

const CourierSchema = new mongoose.Schema({
  courier: { type: String, required: true },
  country: { type: String, required: true },
  weight: { type: Number },
  price: { type: Number, default: NaN }
});

export default mongoose.model('couriers', CourierSchema);

