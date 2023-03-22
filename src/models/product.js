import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: String,
  status: Boolean,
  quantity: Number,
});
export default mongoose.model("product", productSchema);
