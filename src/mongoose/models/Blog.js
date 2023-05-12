import mongoose, { Schema, model } from 'mongoose';

const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  title: stringRequired,
  description: stringRequired,
  slug: stringRequired,
  content: stringRequired,
  banner: stringRequired,
  altText: stringRequired,
  readingTime: stringRequired,
  _id: stringRequired,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.blog || model('blog', schema);
