import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  priceInCents: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Featured', 'Sports', 'Collection'],
  },
  target: {
    type: String,
    require: true,
    enum: ['Men', 'Women', 'Kids'],
  },
  description: { type: String, required: false },
  image: { type: String, required: true },
});

export const Product = mongoose.model('Product', productSchema);
